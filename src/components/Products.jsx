import React from 'react';

const products = [
  {
    id: 1,
    name: 'Hand-painted Mug',
    description: 'A cozy ceramic mug with floral art.',
    image: 'cofee mug.jpg',
  },
  {
    id: 2,
    name: 'Knitted Scarf',
    description: 'Soft, warm, and handmade with love.',
    image: 'scarf.jpg',
  },
  {
    id: 3,
    name: 'Mini Canvas Art',
    description: 'Tiny artwork perfect for gifting.',
    image: 'painting.jpg',
  },
  // Add more products here if needed
];

const Products = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-purple-700 mb-8">Featured Creations</h2>
      
      {/* Grid container with responsive column count and gap */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={product.image}
              alt={product.name}
              width={96}
              height={96}
              className="w-24 h-24 object-contain rounded mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold text-purple-800">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
