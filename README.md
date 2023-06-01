# DOM - Document Object Model

```"The Document Object Model is a platform and language-neutral interface that will allow programs and scripts to dynamically access and update the content, structure and style of documents. The document can be further processed and the results of that processing can in incorporated back into the presented page"  -World Wide Web Consortium (W3C)```

## A Tree of Nodes
  

 - A document (the one we are referring to when we use document. anything) is represented as a tree of nodes of various types
 - Many nodes have "child" nodes (and any child has a direct "parent")
 - A child is a node. Any node may have "children"
 - The "sibling" of a node is a node that is on the same hierarchical level, belonging to the same parent node. 
 
 World Wide Web Consortium (W3C)

## Example

```
<div>
<p> This is a <em> new</em> paragraph in an HTML document </p>
</div>
```

The `<p>` is a child of the `<div>`  
The `<em>` is a child of the `<p>`

### Resources
[DOM](https://www.w3.org/TR/dom)


# Vanilla Javascript

Javascript is extremely popular, and as such, there have been many innovations and add-ons made to it and for it, in the form of additional libraries (just about anything you install with `npm`) and frameworks (such as React, Vue or Angular) that allow us to extend its functionality. 

'Vanilla' javascript is how we refer to javascript that is 'pure', and does not rely on any given library or framework.  As we demonstrated in our lab, we were able to write vanilla javascript right in the browser's developer console, because 'pure' javascript is natively supported in the browser.  

# A Note on Browser Security, and Why We Never Store Important Information on the Front End

Try running the code in the `Amazon.js` file.  Notice how the price changes?  What if someone were able to send that new price to the checkout? 

We don't actually want just anyone who knows how to access the developer tools to be able to change important information in our application!  That is why we store important information in either the backend (or server layer), or in our database.  The backend sends that information to the frontend to display, either directly, or by calling the database first, but the frontend does not actually 'know' any of that information.  If we were to try and checkout with our amazon item for our modified price, we would quickly see that the price in the cart is real again.  And even if we were to change it again, the price we would be charged to our card would be the real, unmodified price.  This is because the front end is sending a reference for our item ( it's ID ) to the backend, which is then using that ID to look up the true product information in the database, where no outside user can get at it.  This is why we always use a database as our source of truth, especially for sensitive things like financial transactions.

The frontend is vulnerable to manipulation!