#!/usr/bin/env python3
"""Module providing simple pagination for a baby names dataset."""
import csv
import math
from typing import List, Tuple, Union, Dict


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Return start and end index range for given page and page size."""
    start_index = page_size * (page - 1)
    end_index = page_size * page
    return (start_index, end_index)


class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Return a page of the dataset for the given pagination settings."""
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        dataset = self.dataset()
        start, end = index_range(page, page_size)
        if len(dataset) <= start:
            return []
        data = dataset[start:end]
        return data

    def get_hyper(
            self, page: int = 1, page_size: int = 10
            ) -> Dict[str, Union[int, List[List], None]]:
        """Return a dictionary."""
        dataset = self.dataset()
        data = self.get_page(page, page_size)
        size = len(data)
        total = len(dataset)
        total_page = math.ceil(total / page_size)
        if page >= total_page:
            next_page = None
        else:
            next_page = page + 1
        if page == 1:
            prev_page = None
        else:
            prev_page = page - 1
        return {
            'page_size': size,
            'page': page,
            'data': data,
            'next_page': next_page,
            'prev_page': prev_page,
            'total_pages': total_page
            }
