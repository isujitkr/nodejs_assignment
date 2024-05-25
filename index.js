import express from 'express';
import sequelize from './database.js';
import formRoutes from './routes/formRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', formRoutes);

app.use(express.static('public'));

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Form listening at http://localhost:${PORT}/form.html`);
        
    });
});
