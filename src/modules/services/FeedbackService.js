import axios from 'axios';


  const getFeedback = () => {
    return axios({
        method: 'GET',
        url: '/feedback'
    });
}

const postFeedback = (feedbackObject) => {
    return axios.post('/feedback', feedbackObject);
}

  export {
    getFeedback,
    postFeedback,
};