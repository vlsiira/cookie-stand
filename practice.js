randomizeProducts: function () {
    analysis.selectedProducts = [];
    while (this.selectedProducts.length < 3) {
        const randomNum = Math.floor(Math.random() * analysis.products.length);
        const product = analysis.products[randomNum];
        if (!analysis.selectedProducts.includes(product)) {
            analysis.selectedProducts.push(product);
            product.timesShown++;
        }
    }
    return analysis.selectedProducts;
},