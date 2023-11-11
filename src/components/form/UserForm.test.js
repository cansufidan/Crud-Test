import { render, screen, waitFor } from "@testing-library/react"
import UserForm from "./UserForm"
import user from '@testing-library/user-event';

test('form gönderilince kullanıcı fonksiyonu doğru paramtreleri alarak çalışır', () => {
    const mock = jest.fn()
    
    render(<UserForm addUser={mock}/>);

    const nameInput = screen.getByLabelText("İsim")
    const mailInput = screen.getByLabelText("Email")
    const submitBtn = screen.getByRole("button")

    user.click(nameInput);
    user.keyboard('bilal');

    user.type(mailInput, 'bilal@gmail.com');

    user.click(submitBtn);

    expect(mock).toBeCalled();

    expect(mock).toBeCalledWith({
    name: 'bilal',
    email: 'bilal@gmail.com',
  });
})

test('form gönderildikten sonra inputlar temizleniyor mu?', async() => {
    render(<UserForm addUser={()=>{}}/>)

    const nameInp = screen.getByLabelText("İsim")
    const mailInp = screen.getByLabelText("Email")
    const button = screen.getByRole("button")

    user.type(nameInp, 'mahmut');
    user.type(mailInp, 'mahmut@gmail.com')

    expect(nameInp).toHaveValue("mahmut")
    expect(mailInp).toHaveValue('mahmut@gmail.com')

    user.click(button)

    await waitFor(() => expect(nameInp).toHaveValue(''));

    await waitFor(() => expect(mailInp.value).toBe(''));
})