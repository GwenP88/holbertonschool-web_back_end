#!/usr/bin/env python3
"""Module that provides a safe mapping value getter."""
from typing import Union, Any, Mapping, TypeVar

T = TypeVar("T")


def safely_get_value(
    dct: Mapping,
    key: Any,
    default: Union[T, None] = None
) -> Union[Any, T]:
    """Return the value for a key or the default value."""
    if key in dct:
        return dct[key]
    else:
        return default
