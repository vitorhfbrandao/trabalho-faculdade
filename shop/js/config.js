$(function() {
	simpleCart({

	    // Formato e as colunas do carrinho
	    // Documentação das colunas do carrinho
	    cartColumns: [
	        { attr: "name" , label: "Nome" },
	        { attr: "price" , label: "Preço", view: 'currency' },
	        { view: "decrement" , label: false },
	        { attr: "quantity" , label: "Quantidade" },
	        { view: "increment" , label: false },
	        { attr: "total" , label: "Total", view: 'currency' },
	        { view: "remove" , text: "Remover" , label: false }
	    ],

	    // "div" or "table" - constrói o carrinho como uma table ou coleção de divs
	    cartStyle: "div",

	    // E-mail para recebimento de valores com PayPal
	    checkout: {
	        type: "PayPal" ,
	        email: "paypal@test.com"
	    },

	    // Coloque a Moeda da Loja. Exemplo USD, EUR, BRL
	    currency: "BRL",

	    data: {},

	    language: "portuguese-br",

	    excludeFromCheckout: [
	    	'qty',
	    	'thumb'
	    ],

	    shippingCustom: null,

	    shippingFlatRate: 0,

	    shippingQuantityRate: 0,

	    shippingTotalRate: 0,

	    taxRate: 0,

	    taxShipping: false,

	    beforeAdd               	: null,
	    afterAdd                	: null,
	    load                    	: null,
	    beforeSave              	: null,
	    afterSave               	: null,
	    update                  	: null,
	    ready                   	: null,
	    checkoutSuccess             : null,
	    checkoutFail                : null,
	    beforeCheckout              : null

	});

	simpleStore.init({

		// Título e Sub-Título da Página
		brand : "Casa&Lazer Store",

		// Máximo de produtos por linha(accepts 1, 2 or 3)
		numColumns : 3,

		// root
		JSONFile : "products.json"

	});

});
