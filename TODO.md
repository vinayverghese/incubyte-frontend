### General

1. create string calculator test module
2. create string calculator basic test
3. create string calculator function based on test

structure
```typescript
function add(numbers: string): number {
// implementation goes here
}
```
### Backend

- Allow the add method to handle any amount of numbers.
- Allow the add method to handle new lines between numbers (instead of commas).
 ("1\n2,3" should return 6)
- Support different delimiters:
   - To change the delimiter, the beginning of the string will contain a separate
   line that looks like this: "//[delimiter]\n[numbers…]". For example, "//;\n1;2" where
   the delimiter is ";" should return 3.
- Calling add with a negative number will throw an exception: "negative numbers not allowed <negative_number>".
- If there are multiple negative numbers, show all of them in the exception
message, separated by commas.


#### Frontend
Create a user interface for the String Calculator:
o Provide an input box for users to enter the numbers.
o Include a button to trigger the calculation.
o Display the result on the page dynamically.
o Extra points for deploying the application to a public URL.

