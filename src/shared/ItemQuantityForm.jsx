import React from 'react';
import { useState } from 'react';

import Card from './Card';
import CardTitle from './CardTitle';
import InputLabelPair from './InputLabelPair';
import Button from './Button';

function ItemQuantityForm({ onSubmit, title, showQuantity }) {
	const [itemID, setItemID] = useState('test');
	const [quantity, setQuantity] = useState(1);

	const handleIDChange = (e) => {
		const newValue = e.target.value;
		setItemID(newValue);
	};

	const handleQuantityChange = (e) => {
		const newValue = e.target.value;
		setQuantity(newValue);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({ itemID, quantity });
	};

	return (
		<Card>
			<CardTitle>{title}</CardTitle>
			<form
				className='flex flex-col gap-2 px-4 py-2 w-96'
				onSubmit={handleSubmit}
			>
				<InputLabelPair
					text='Item ID'
					inputType={'text'}
					onChange={handleIDChange}
				/>
				{showQuantity && (
					<InputLabelPair
						text='Item Quantity'
						inputType={'number'}
						onChange={handleQuantityChange}
					/>
				)}
				<Button type='submit'>Add {title}</Button>
			</form>
		</Card>
	);
}

ItemQuantityForm.defaultProps = {
	title: 'title',
  showQuantity: true
};

export default ItemQuantityForm;
