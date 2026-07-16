# AcousticLogic on Nuxt

Сайт перенесен в нормальную структуру `Nuxt + Tailwind CSS + TypeScript`.

## Стек

- `Nuxt 4`
- `@nuxtjs/tailwindcss`
- `TypeScript`

## Запуск

```powershell
npm.cmd install
npm.cmd run dev
```

Локально приложение поднимется через Nuxt dev server. Для production-сборки:

```powershell
npm.cmd run build
```

Для статической генерации:

```powershell
npm.cmd run generate
```

Готовый статический сайт будет лежать в `.output/public`.

## GitHub Pages

Для проекта уже добавлен workflow [deploy-pages.yml](/C:/Users/Krutoi2006/anton%20rakushki/.github/workflows/deploy-pages.yml:1).

Что нужно сделать на GitHub:

1. Запушить репозиторий в GitHub.
2. Убедиться, что основная ветка называется `main`.
3. В настройках репозитория открыть `Settings -> Pages`.
4. В `Source` выбрать `GitHub Actions`.

После этого каждый пуш в `main` будет автоматически собирать Nuxt-сайт и публиковать `.output/public` в GitHub Pages.

`baseURL` для Pages настраивается автоматически:

- для `username.github.io` будет `/`
- для обычного репозитория будет `/<repo-name>/`

## Структура

- `pages/index.vue` — сборка лендинга
- `components/landing/*` — секции страницы
- `components/layout/*` — шапка и футер
- `data/landing.ts` — контент и данные секций
- `assets/css/main.css` — кастомные анимации и служебные классы
- `tailwind.config.ts` — токены дизайна
