I am fine what about you!
Hi vijesh, How are you/n

I am fine what about you!
The grep command is a powerful text searching tool used in Unix and Unix-like operating systems. It searches through files or input provided via standard input and outputs lines that match a specified pattern. Here are some common usages and options for the grep command:

Basic Syntax
css
Copy code
grep [OPTIONS] PATTERN [FILE...]
Common Options
-i: Ignore case (case insensitive).
-v: Invert match (select non-matching lines).
-r or -R: Recursively search directories.
-l: Print only names of files with matching lines.
-n: Print line numbers with output lines.
-c: Count the number of matching lines.
-H: Print the file name for each match (default when searching multiple files).
-h: Do not print the file name for each match (default when searching a single file).
-A NUM: Print NUM lines of trailing context after matching lines.
-B NUM: Print NUM lines of leading context before matching lines.
-C NUM: Print NUM lines of leading and trailing context.
Examples
Basic Search
Search for the word "hello" in file.txt:

sh
Copy code
grep "hello" file.txt
Case Insensitive Search
Search for "hello" ignoring case:

sh
Copy code
grep -i "hello" file.txt
Search in Multiple Files
Search for "hello" in all .txt files in the current directory:

sh
Copy code
grep "hello" *.txt
Recursive Search
Search for "hello" in all files in the current directory and subdirectories:

sh
Copy code
grep -r "hello" .
Invert Match
Show lines that do not match "hello":

sh
Copy code
grep -v "hello" file.txt
Count Matches
Count the number of lines that match "hello":

sh
Copy code
grep -c "hello" file.txt
Display Line Numbers
Show line numbers for each matching line:

sh
Copy code
grep -n "hello" file.txt
Context Lines
Show 3 lines of context around each match:

sh
Copy code
grep -C 3 "hello" file.txt
Display Only Filenames
Show only the names of files that contain the word "hello":

sh
Copy code
grep -l "hello" *.txt
These are just a few examples of what you can do with grep. It is a versatile tool with many options to refine your search.







