export async function getStaticProps({ params }) {
    const client = new ApolloClient({
       uri: 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clk3ivcdl0l4q01ur07r0hqxx/master',
       cache: new InMemoryCache(),
    });
    const data = await client.query({
       query: gql`
          query MyQuery($slug: String) {
             product(where: { slug: $slug} ) {
                id
                name
                slug
                description {
                    html
                }
                image {
                   url
                }
             }
          }
       `,
       variables: {
        slug: params.productslug,
       },
    });

    const product = data.data.product;
    return {
       props: {
          product,
       },
    };
   }