import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

const users = [
  { name: 'Mehmet', email: 'mehmet43@gmail.com' },
  { name: 'Ayşe', email: 'aysche43@gmail.com' },
  { name: 'Ali', email: 'alisd@gmail.com' },
  { name: 'Deneme', email: 'mehm1et43@gmail.com' },
  { name: 'Test', email: 'aysch2443@gmail.com' },
  { name: 'Mahmut', email: 'ali123sd@gmail.com' },
];

test('her kullanıcı için ekrana bir tablo satırı basar', () => {
  render(<UserList users={users} />);

  const rows = within(screen.getByTestId('users')).getAllByRole(
    'row'
  );

  expect(rows).toHaveLength(users.length);
});

test('her bir kullanıcı için isim ve email değeri ekranda gözükür', () => {
  render(<UserList users={users} />);

  for (const user of users) {
    const nameCell = screen.getByText(user.name);

    const mailCell = screen.getByText(user.email);
    
    expect(nameCell).toBeInTheDocument();
    expect(mailCell).toBeInTheDocument();
  }
});