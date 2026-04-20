#!/usr/bin/env python3
"""Module providing a helper function to calculate pagination index ranges."""
from typing import Tuple

def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Return start and end index range for given page and page size."""
    start_index = page_size * (page - 1)
    end_index = page_size * page
    return (start_index, end_index)
