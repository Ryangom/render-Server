
// make a express app
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send(
        {
            data: [
                {
                    id: 1,
                    name: 'John Doe',
                    email: '',
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                    email: '',
                },
                {
                    id: 3,
                    name: 'Jim Doe',
                    email: '',
                },

            ]
        }
    );
});



app.listen(3000, () => {
    console.log('listening on 3000');
});