export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    const message = error.toString();
    queue.push((message));
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
