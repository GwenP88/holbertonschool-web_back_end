#!/usr/bin/env python3
"""Module for executing multiple tasks concurrently."""
import asyncio
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n, max_delay):
    """Spawn task_wait_random n times and return delays in ascending order."""
    delays = []
    tasks = []
    for i in range(n):
        tasks.append(task_wait_random(max_delay))
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)
    return delays
