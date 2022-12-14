// import { useStaticQuery, graphql } from 'gatsby';

// export const useAccomplishments = () => {
// 	const data = useStaticQuery(graphql`
// 		query Accomplishments {
// 			allContentfulProject(
// 				filter: { categories: { eq: "accomplishments" } }
// 			) {
// 				edges {
// 					node {
// 						animationType
// 						categories
// 						demoLink
// 						title
// 						technologies
// 						tags
// 						role
// 						description {
// 							description
// 						}
// 						id
// 					}
// 				}
// 			}
// 		}
// 	`);
// 	return data.allContentfulProject.edges;
// };
