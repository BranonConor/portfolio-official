import { useStaticQuery, graphql } from 'gatsby';

export const useAllProjects = () => {
	const data = useStaticQuery(graphql`
		query Projects {
			allContentfulProject {
				edges {
					node {
						animationType
						categories
						demoLink
						title
						technologies
						tags
						role
						description {
							description
						}
						id
					}
				}
			}
		}
	`);
	return data.allContentfulProject.edges;
};
