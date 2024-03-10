import './HomePage.css';
import Product from './Product';

export default function HomePage() {
	const products = [
		{
			id: 1,
			name: 'Fresh Milk',
			description: 'Pure and fresh milk directly from the farm.',
			price: '2.99',
			image: 'path-to-your-image.jpg', // Replace with your image path
		},
		// Add more products as needed
	];
	return (
		<div className='home'>
			<section className='intro'>
				<h2>Welcome to Milk Store!</h2>
				<p>
					Discover the finest selection of dairy products sourced from
					local farms. Our commitment to quality ensures that you get
					the freshest milk, cheese, yogurt, and more, directly to
					your doorstep.
				</p>
			</section>

			<section className='whats-new'>
				<h3>What's New</h3>
				<div className='new-products'>
					{products.map((data) => (
						<Product
							key={data.id}
							name={data.name}
							description={data.description}
							image={data.image}
							price={data.price}
						/>
					))}
					<p>
						Check out our latest additions and find something new to
						love!
					</p>
				</div>
			</section>
		</div>
	);
}
