// pick a product on Amazon.ca, such as:
https://www.amazon.ca/Philips-Hue-Bluetooth-Compatible-Assistant/dp/B08BNNHLNS?pd_rd_w=gQ9fg&content-id=amzn1.sym.af74bb2c-0471-4d18-a5da-d9b17b5bd7dd&pf_rd_p=af74bb2c-0471-4d18-a5da-d9b17b5bd7dd&pf_rd_r=BTQET02YSZC8WE6N5H5E&pd_rd_wg=JXIDM&pd_rd_r=82035880-3bd4-440b-92f8-65fe51b59e3f&pd_rd_i=B08BNNHLNS&psc=1&ref_=pd_bap_d_grid_rp_0_2_i


//Type the following inside the dev console:
const price = document.querySelectorAll('.a-price-whole')


//verify that we have successfully assigned these nodes to 'price'.  Notice that what is returned is a NodeList element, which is another pseudo array object
price

//we can use array notation, [], to access a specific element within this special object
// give our selected element a new value
price[0].innerHTML = 9

