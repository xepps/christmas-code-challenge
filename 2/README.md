# Challenge 2 - Skint Santa’s Scrape

## Description
Due to a lack of finances, Father Christmas has been forced to fire his elfen workforce and can only spend £10 on each good boy or girl this year. However, since St Nick is super fair, he wants to spend exactly the same amount on each child.

Since Santa gets a discount at Toys ‘R’ Us, the prices aren’t exactly round which makes this more difficult than intended. Your task is to write him a script that will take in a list of toys and prices, and output all the possible combinations of toys he could get for £10.

* The goal is always £10 (or 1000p)
* Solutions can include multiple toys of the same kind - assume they’re available in unlimited quantities.
* Solutions do not need to include all available kinds of toys.
* Determine all possible solutions for the given input

## Input Description
A file containing a json object with keys of the toys name (a word without spaces), and value of the toy’s price in pence (an integer).

## Output Description
One line per solution - each a comma-separated set of quantity+name pairs, describing how many toys of which kind to buy.

Do not list toys with a quantity of zero in the output.

## Points
This challenge is worth 15 points.