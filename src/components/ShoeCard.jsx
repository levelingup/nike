const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImg }) => {
	const handleClick = () => {
		if (bigShoeImg !== imgUrl.bigShoe) {
			changeBigShoeImage(imgUrl.bigShoe);
		}
	};
	return (
		<div
			className={`border-2 rounded-xl ${
				bigShoeImg === imgUrl ? "border-coral-red" : "border-transparent"
			} cursor-pointer`}
			onClick={handleClick}
		>
			<img
				src={imgUrl.thumbnail}
				alt="shoe collection"
				width={127}
				height={103}
				className="object-contain"
			/>
		</div>
	);
};

export default ShoeCard;
