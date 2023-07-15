export async function getStaticProps() {
    const client = new ApolloClient({
       uri: 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clk3ivcdl0l4q01ur07r0hqxx/master',
       cache: new InMemoryCache(),
    });
    const data = await client.query({
       query: gql`
          query ProductsQuery {
             products {
                id
                name
                slug
                price
                image {
                   url
                }
             }
          }
       `,
    });
    const allProducts = data.data.products;
    return {
       props: {
          allProducts,
       },
    };
   }