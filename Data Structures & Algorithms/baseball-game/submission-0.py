class Solution:
    def calPoints(self, operations: List[str]) -> int:
        stack: List[int] = []
        
        for index, operation in enumerate(operations):
            print(stack)
            operation = int(operation)
            if operation == '+':
                stack.append(stack[len(stack) - 1] + stack[len(stack) - 2])
            elif operation == 'D':
                stack.append(stack[len(stack) - 1] * 2)
            elif operation == 'C':
                stack.pop()
            else:
                stack.append(operation)
        return sum(stack)
