exports.createPages = async function ({ actions, graphql }) {
	const { data } = await graphql(`
		query BlogPosts {
			allContentfulBlogPost {
				nodes {
					slug
				}
			}
		}
	`);
	data.allContentfulBlogPost.nodes.forEach((post) => {
		actions.createPage({
			path: `blog/${post.slug}`,
			component: require.resolve(`./src/templates/BlogPostPage.js`),
			context: { slug: post.slug },
		});
	});
};
