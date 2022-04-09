import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import ImageList from '@material-ui/core/ImageList';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: 10,
		marginLeft: 20,
		marginRight: 20,
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	icon: {
		color: 'rgba(255, 255, 255, 0.54)',
	},
	media: {
		width: 300,
		height: 300,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

export default function RecipeReviewCard() {
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);
	const [data, setData] = useState([])

	useEffect(() => {
		fetch("https://thecocktaildb.com/api/json/v1/1/search.php?f=a")
			.then((result) => result.json())
			.then((item) => {
				setData(item.drinks);
			});
	}, []);

	console.log(data)


	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<div className={classes.root}>
			<ImageList
				gap={30}
				rowHeight='auto'
				cols={5}
			>
				{data.map((item) => (
					<Card key={item.idDrink}
					>
						{/* <CardHeader
							avatar={
								<Avatar aria-label="recipe" className={classes.avatar}>
									R
								</Avatar>
							}
							action={
								<IconButton aria-label="settings">
									<MoreVertIcon />
								</IconButton>
							}
							title={item.strDrink}
							subheader="September 14, 2016"
						/> */}
						<CardMedia
							className={classes.media}
							image={item.strDrinkThumb}
							title={item.strDrink}
						/>
						<CardContent>
							<Typography variant="h5" color="primary" component="p">
								{item.strDrink}
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<IconButton aria-label="add to favorites">
								<FavoriteIcon />
							</IconButton>
							<IconButton aria-label="share">
								<ShareIcon />
							</IconButton>
							<IconButton
								className={clsx(classes.expand, {
									[classes.expandOpen]: expanded,
								})}
								onClick={handleExpandClick}
								aria-expanded={expanded}
								aria-label="show more"
								position='absolute'
							>
								<ExpandMoreIcon />
							</IconButton>
						</CardActions >
						<Collapse in={expanded} timeout='auto'>
							<CardContent>
								<Typography paragraph>Method:</Typography>
								<Typography paragraph>
									Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
									minutes.
								</Typography>
							</CardContent>
						</Collapse>
					</Card>
				))}
			</ImageList>
		</div>
	);
}

