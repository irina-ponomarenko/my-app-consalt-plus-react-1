import React from 'react';
class PaginationPage extends React.Component {
    render() {
        const listPagination = [
            {
                className: 'active_border',
                content: '1'
            },
            {
                content: '2'
            },
            {
                content: '3'
            }

        ];
        return (
            <div className="nav-blog-page margin-blog-nav">
                <ul>
                    {
                        listPagination.map((item,index) => {
                          return(
                              <li key={index}
                                  className={item.className + " circle-blog-nav"}>
                                  <a href="">{item.content}</a>
                              </li>
                          )
                        })
                    }
                </ul>
            </div>
        );
    };
}
export default PaginationPage;