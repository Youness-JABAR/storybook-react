type Props ={
    /**some description */
    variant: 'green' | 'yellow' | 'red'
};


    /**some description */

const Light = ({variant ='green'}: Props) => {

    return <div
    style={{
        background: variant,
        height: '50px',
        width: '50px',
        borderRadius: '50%',
    }}
    ></div>;
};


export default Light;