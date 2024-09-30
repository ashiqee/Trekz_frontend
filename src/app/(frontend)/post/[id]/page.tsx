import React from 'react';

const PostDetails = ({params}:{params:any}) => {
    return (
        <div>
            {params.id}
        </div>
    );
};

export default PostDetails;