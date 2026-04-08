#!/usr/bin/env python3
"""Measure runtime for parallel async comprehensions."""
import asyncio
from time import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Executes four async comprehensions
    in parallel and returns the runtime."""
    start = time()
    await asyncio.gather(*[async_comprehension() for _ in range(4)])
    end = time()
    return end - start
