import { useStaticQuery, graphql } from 'gatsby';

export const useAllBlogPosts = () => {
	const data = useStaticQuery(graphql`
		query BlogPosts {
			allContentfulBlogPost(sort: { fields: publishDate }) {
				edges {
					node {
						id
						slug
						title
						description {
							description
						}
						publishDate(formatString: "MMMM YYYY")
						heroImage {
							publicUrl
						}
					}
				}
			}
		}
	`);
	return data.allContentfulBlogPost.edges;
};
