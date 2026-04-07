#!/usr/bin/env python3
"""Module that provides element length function."""
from typing import List, Iterable, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return a list of tuples with sequence and its length."""
    return [(i, len(i)) for i in lst]
