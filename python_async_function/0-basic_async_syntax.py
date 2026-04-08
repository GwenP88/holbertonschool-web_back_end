#!/usr/bin/env python3
"""Basic asynchronous coroutine module."""
import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """Wait for a random delay and return it"""
    r = random.uniform(0, max_delay)
    await asyncio.sleep(r)
    return r
