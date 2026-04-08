#!/usr/bin/env python3
"""Async comprehension coroutine module."""
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Collects 10 random floats
    from async_generator using an async comprehension."""
    return [value async for value in async_generator()]
