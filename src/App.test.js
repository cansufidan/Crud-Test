import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('Uygulama doğru şekilde çalışıyor mu?', async () => {
    render(<App/>);

    const nameInp = screen.getByLabelText('İsim');
    const mailInp = screen.getByLabelText('Email');
    const button = screen.getByRole('button', {
        name: "Kullanıcı Ekle",
    });

    user.type(nameInp, 'elif');
    user.type(mailInp, 'elss@gmail.com');

    user.click(button);

    await screen.findByRole('cell', {name: 'elif'})
    await screen.findByRole("cell",{name: 'elss@gmail.com'})
})
