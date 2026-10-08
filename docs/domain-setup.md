# Подключение maybeproject.ru

Основной адрес: https://maybeproject.ru/. Репозиторий: https://github.com/FlashDashSmash/maybeproject.

## Публикация

Сайт статический, сборка и зависимости не требуются. Workflow `.github/workflows/deploy-pages.yml` публикует корень ветки `main` через GitHub Actions. Менять ветку, каталог публикации, HTML, CSS или JavaScript для домена не нужно: внутренние ссылки и ресурсы используют относительные пути.

Файл `CNAME` находится в корне и попадает в артефакт. В режиме GitHub Actions этот файл сам по себе не задаёт домен: его необходимо сохранить в **Settings → Pages → Custom domain**. Он также сохраняет домен в исходниках на случай публикации из ветки.

## GitHub Pages

Открыть https://github.com/FlashDashSmash/maybeproject/settings/pages:

1. Сохранить **Source: GitHub Actions**.
2. В **Custom domain** указать `maybeproject.ru` (без протокола и пути), нажать **Save**.
3. После изменения DNS дождаться успешной проверки домена и выпуска сертификата.
4. Включить **Enforce HTTPS**, когда настройка станет доступна; если уже включена, оставить включённой.

До изменения DNS проверка домена может показывать ошибку. Прежний адрес https://flashdashsmash.github.io/maybeproject/ после назначения домена может перенаправлять на новый адрес; это штатное поведение Pages, а не независимая резервная копия.

## DNS в REG.RU

Проверено 8 октября 2026 года до перехода: DNS-серверы `ns1.reg.ru`, `ns2.reg.ru`; A-запись основного домена `95.163.244.138`; AAAA и CNAME для `www` не обнаружены через публичный DNS. Сначала сохранить текущую зону (экспорт или скриншот) для отката.

Личный кабинет REG.RU → **Домены → maybeproject.ru → DNS-серверы и управление зоной → Изменить → Добавить запись**.

Заменить A-запись `@ → 95.163.244.138` четырьмя записями:

| Тип | Subdomain | Значение |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | flashdashsmash.github.io. |

Для CNAME значение вводится в **Canonical name**. Не добавлять `https://` или `/maybeproject/`. TTL можно оставить стандартным; если поле доступно, выбрать 3600 секунд. GitHub Pages перенаправит `www` на основной домен после настройки обоих адресов.

Старую A-запись нельзя оставлять параллельно с новыми: пользователи могут попадать на разные серверы. Заменить её при переключении, сохранив значение для отката. Не изменять MX, TXT и почтовые поддомены. На имени `www` не должны одновременно существовать CNAME и A/AAAA. NS-серверы менять не требуется.

IPv6 необязателен. Если нужен, добавить все четыре AAAA для `@`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`. Не оставлять AAAA другого хостинга. Если позже появятся ограничивающие CAA-записи, они должны разрешать `letsencrypt.org`.

## Проверка после переключения

Обновление DNS и доступность HTTPS могут занять до 24 часов.

1. Проверить все четыре A-записи `maybeproject.ru` и CNAME `www.maybeproject.ru`.
2. Убедиться, что последняя публикация **Deploy Pages** в Actions успешна.
3. Открыть https://maybeproject.ru/, `work.html`, `contact.html`, `about.html`, `project.html?slug=axonic`, `project.html?slug=saydo` и другие кейсы. Проверить прямое открытие и обновление страниц.
4. Проверить загрузку картинок, шрифтов, CSS и JS без 404 и mixed content, меню, языки, фильтры и окно «Обо мне».
5. Проверить перенаправление https://www.maybeproject.ru/ на https://maybeproject.ru/ и HTTP на HTTPS.

## Откат

Сохранённая конфигурация до перехода: `build_type: workflow`, `source.branch: main`, `source.path: /`, `cname: null`, `https_enforced: true`; опубликованный коммит `9a863692a81fe340d3b410232064f483014858c9`.

Если необходимо вернуть прежний адрес GitHub Pages, очистить **Custom domain** в Settings → Pages. В режиме Actions именно настройка Pages управляет доменом. Если потребуется отменить изменения исходников, отменить только коммит подключения домена отдельным revert-коммитом. Для возврата домена на прежний сервер восстановить сохранённую DNS-зону, включая `@ A 95.163.244.138`. Workflow и исходники сайта сохранены.

## Официальные инструкции

- [GitHub: подключение собственного домена](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub: устранение проблем домена и HTTPS](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)
- [REG.RU: ресурсные записи в личном кабинете](https://help.reg.ru/support/dns-servery-i-nastroyka-zony/nastroyka-resursnykh-zapisey-dns/nastroyka-resursnykh-zapisey-v-lichnom-kabinete)
