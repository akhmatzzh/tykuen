# Тыкуэн

Тыкуэн — молодежная PWA-платформа для жителей Кабардино-Балкарской Республики. Пользователи смогут продавать вещи, отдавать их бесплатно, обмениваться ими и предлагать услуги с договоренностью напрямую.

## Стек

- React и TypeScript
- Vite
- Supabase: PostgreSQL, Auth, Storage и Realtime
- PWA
- Vitest и Testing Library

## Требования

- Node.js 20.19+ или 22.12+
- npm
- Проект Supabase для работы регистрации и авторизации

## Локальный запуск

```bash
npm install
cp .env.example .env.local
npm run dev
```

Перед использованием авторизации заполни `.env.local` значениями из настроек своего проекта Supabase:

```text
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_PUBLISHABLE_OR_ANON_KEY
```

Подробная настройка описана в [docs/SUPABASE_SETUP.md](docs/SUPABASE_SETUP.md). Не добавляй реальные ключи в GitHub. Используй только publishable/anon key на клиенте; service role key нельзя помещать во frontend.

## Проверки

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Структура

- `src/app` — приложение и главная страница.
- `src/components` — общие интерфейсные компоненты.
- `src/features/auth` — регистрация, вход и состояние сессии.
- `src/lib` — клиенты и библиотеки.
- `src/services` — интеграции и работа с данными.
- `src/types` — общие типы TypeScript.
- `src/styles` — стили.
- `src/test` — настройки тестовой среды.
- `supabase/migrations` — SQL-миграции базы данных.
- `docs` — архитектура и технические решения.
- `tests` — дополнительные модульные и интеграционные тесты.

## Текущий этап

Главная страница содержит демонстрационные объявления, поиск и фильтры на стороне клиента. Добавлены форма регистрации и входа через Supabase Auth, восстановление сессии при перезагрузке и выход из аккаунта. Объявления, чаты и избранное пока используют демонстрационные данные или локальное поведение и ещё не подключены к базе.

Перед отправкой изменений прочитайте [CONTRIBUTING.md](CONTRIBUTING.md).
