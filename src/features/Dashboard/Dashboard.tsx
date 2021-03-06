import { Link } from 'react-router-dom';
import styled from 'styled-components';

import quotesJson from '../../assets/json/quotes.json';

export default function Dashboard() {
	const randomQuoteNum = Math.floor(Math.random() * quotesJson.length);
	const DashboardContainer = styled.div`
		display: flex;
		width: 100%;
		height: 90vh;
		justify-content: center;
		align-items: center;

		.panels-container {
			width: 100%;
			height: 80%;
		}

		.panel {
			width: 100%;
			padding: 2rem;
			margin: 1rem;
			text-align: left;
			border-radius: 1rem;
			background-color: #fbfbfb;
		}

		.panel-flex {
			display: flex;
		}

		.panels-upper {
			height: 50%;

			.panel-quote {
				width: 66.3%;
			}
			.panel-points {
				width: 33.3%;
			}
		}


		.quote {
			width: 100%;
			height: 100%;
			padding: 2rem 0;

			.quote-title{
				height: 75%;

				h1{
         font-size: 3rem;
				}
			}

		.quote-author {
				width: 100%;
				text-align: right;
			}
		}

		.points-value {
			width: 100%;
			height: 90%;
			display:flex;
			align-items: center;
			justify-content: center;

			h1{
				font-weight: 100
			}
		}

		.points-title{
			text-align: center;
			height: 10%;
		}

		// LOWER PANEL

		.panel-lower {
			height: 50%;

			.panel-link {
				width: 33%;
			}
		}

		.panel-link-header {
			height: 10%;
		}
		.panel-link-button {
			height: 90%;
			display: flex;
			align-items: end
			justify-content: end;
			width: 100%

			button{
				border: none;
				color: white;
				background-color: #EFAF98
				padding: 0.5rem 1rem;
				border-radius: 3rem;
			}

		}

	`;
	return (
		<DashboardContainer>
			<div className='panels-container'>
				<div className='panels-upper panel-flex'>
					<div className='panel-quote panel-flex'>
						<div className='panel'>
							<div className='quote'>
								<div className='quote-title'>
									<h1>{quotesJson[randomQuoteNum].quote}</h1>
								</div>
								<div className='quote-author'>
									<p>-{quotesJson[randomQuoteNum].author}</p>
								</div>
							</div>
						</div>
					</div>
					<div className='panel-points panel-flex'>
						<div className='panel'>
							<div className='points-title'>
								<h2>Points</h2>
							</div>
							<div className='points-value'>
								<h1>143</h1>
							</div>
						</div>
					</div>
				</div>
				<div className='panel-lower panel-flex'>
					<div className='panel-link panel-flex'>
						<div className='panel'>
							<div className='panel-link-header'>
								<h2>Your Journal</h2>
							</div>
							<div className='panel-link-button'>
								<Link to='/user/1/journal'>
									<button>
										<h2>Visit now</h2>
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className='panel-link panel-flex'>
						<div className='panel'>
							<div className='panel-link-header'>
								<h2>Analysis your thoughts</h2>
							</div>
							<div className='panel-link-button'>
								<Link to='/user/1/journal'>
									<button>
										<h2>Visit now</h2>
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className='panel-link panel-flex'>
						<div className='panel'>
							<div className='panel-link-header'>
								<h2>Questions to make you think</h2>
							</div>
							<div className='panel-link-button'>
								<Link to='/user/1/journal'>
									<button>
										<h2>Visit now</h2>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</DashboardContainer>
	);
}
