import React, {useState} from 'react'
import { data as initialData} from './data'
import avatar from '../assets/avatar.jpg'
import landscape from '../assets/landscape.jpg'


export default function SocialCard() {
	const [userData] = useState(initialData)
	return (
		<div className="social-card">
			<div className="social-card__header">
				<div className="social-card__header-img-container">
					<img src={landscape} alt="landscape" width="70"/>
				</div>
				<h1>{userData.title}</h1>
				<div className="social-card__header-avatar-container">
					<span className="social-card__header-name">{userData.name}</span>
					<img src={avatar} alt="avatar" width="60"/>
				</div>
			</div>
			<div className="social-card__body">
				<h3>{userData.title}</h3>
				<p>{userData.name}</p>
				<a href={userData.url}>{userData.urlDisplayName}</a>
			</div>
		</div>
	)
}
