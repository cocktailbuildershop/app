import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import itemData from './itemData';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	icon: {
		color: 'rgba(255, 255, 255, 0.54)',
	},
}));



export default function TitlebarImageList() {
	const classes = useStyles();
	const [itemData, setItemData] = useState([])

	useEffect(() => {
		fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
			.then((result) => result.json())
			.then((data) => {
				setItemData(data.drinks);
			});
	}, []);


	return (
		<div className={classes.root}>
			<ImageList
				rowHeight={200}
				gap={5}
				cols={6}
			>
				{itemData.map((item) => (
					<ImageListItem key={item.idDrink}>
						<img src={item.strDrinkThumb} alt={item.strDrink} />
						<ImageListItemBar
							title={item.strDrink}
							subtitle={<span>Category: {item.strCategory}</span>}
							actionIcon={
								<IconButton aria-label={`info about ${item.strIngredient1}`} className={classes.icon}>
									<InfoIcon />
								</IconButton>
							}
						/>
					</ImageListItem>
				))}
			</ImageList>
		</div>
	);
}
