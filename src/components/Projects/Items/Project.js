import React, { useState, useEffect } from 'react';
import Tag from '../../UI/Tag';
import Button from '../../UI/Button';
import Translator from '../../I18n/Translator';

const Project = (props) => {
	const [tagList, setTagList] = useState([]);

	const { tags, text, title, imgPath, site, code } = props;

	const siteBtn = site ? (
		<div>
			<Button small path={site} dark>
				<i className="fas fa-eye"></i> <Translator path="projects.website" />
			</Button>
		</div>
	) : null;

	useEffect(() => {
		setTagList(
			tags.map((tag) => {
				return (
					<div key={tag}>
						<Tag>{tag}</Tag>
					</div>
				);
			}),
		);
	}, []);

	return (
		<div className="project">
			<img src={imgPath} alt="" />
			<div className="content">
				<p className="title">{title}</p>
				<div className="tags">{tagList}</div>
				<p className="content-text">{text}</p>
			</div>
			<div className="buttons">
				{siteBtn}
				<div>
					<Button small path={code} dark>
						<i className="fas fa-code"></i> <Translator path="projects.code" />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Project;
