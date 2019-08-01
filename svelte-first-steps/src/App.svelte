<script>

	import Button from './Button.svelte';
	import Product from './Products.svelte'

	let title = '';
	let price = 0;
	let description = '';

	let products = [];
	let cartItems = [];

	function createProduct() {
		const newProduct = {
			title: title,
			price: price,
			description: description
		};
		products = products.concat(newProduct);
	}

	function addToCart(event) {
		const selectedTitle = event.detail;
		cartItems = cartItems.concat(
			...products.find(prod => prod.title === selectedTitle)
		);
		console.log(cartItems);
	}

</script>

<style>
	section {
		width: 30rem;
		margin: auto;
	}

	label, input, textarea {
		width: 100%;
	}
</style>

<section>

	<div>
		<label for="title">Title</label>
		<input type="text" id="title" bind:value={title}>
	</div>

	<div>
		<label for="price">Price</label>
		<input type="number" id="price" bind:value={price}>
	</div>

	<div>
		<label for="description">Description</label>
		<textarea rows="3" id="description" bind:value={description}></textarea>
	</div>

	<Button on:click={createProduct}>Create Product</Button>

</section>

<section>

	{#if products.length === 0}
	
		<p>No Products where added yet!</p>
		
		{:else}
		
		{#each products as product}
			<Product 
				productTitle={product.title} 
				productPrice={product.price} 
				productDescription={product.description}
				on:addcart={addToCart}
			/>
		{/each}

	{/if}

</section>

