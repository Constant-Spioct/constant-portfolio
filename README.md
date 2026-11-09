# Responsive Student Portfolio & Academic Management Website

A five-page, responsive portfolio and academic task planner for the COS 106 – Introduction to Web Technologies practical term project at MIVA Open University. The site uses semantic HTML, an external CSS stylesheet, and vanilla JavaScript; it does not use a front-end framework or a server.

## Project overview

The portfolio introduces Onwuzurike Izuchukwu Constant, a student at MIVA Open University studying Data Science, with academic interests in Data Analysis and Data Science. It presents academic and professional experience, includes the Diploma in Data Analysis / Introduction to Data Science (2024) awarded by AITECH Abuja (IT Training Institute & Tech Solutions), and lists Microsoft Power BI, Microsoft Excel, and Tableau among the student’s tools. The Projects page keeps placeholders for actual data-analysis work separate from three explicitly labelled sample demonstrations. The site also includes an academic planner and a validated contact-form demonstration. The visual system uses navy, warm off-white, and teal, with responsive layouts, keyboard-accessible navigation, and reduced-motion support.

The confirmed name, university, programme, student status, academic interests, and 2024 qualification are reflected in the site. Employment dates, responsibilities, achievements, proficiency levels, personal contact details, and project specifics have not been fabricated. Replace remaining bracketed text and illustrative profile artwork with your own information before submitting or publishing.

## Objectives

- Demonstrate semantic HTML5 structure, navigation, lists, tables, forms, images, and multimedia.
- Apply CSS layout and styling with Flexbox, Grid, responsive breakpoints, transitions, hover states, and a keyframe animation.
- Use vanilla JavaScript for responsive navigation, client-side form validation, and dynamic academic-task management.
- Persist academic planner tasks locally in the visitor’s browser using `localStorage`.
- Demonstrate a polished, accessible, multi-page student portfolio.

## Technologies

- HTML5
- CSS3 (custom properties, Flexbox, Grid, media queries, keyframes)
- Vanilla JavaScript (ES6+, DOM APIs, events, `localStorage`)
- Inline SVG files for original, locally stored illustration assets
- Google Fonts (`DM Sans` and `Manrope`); the site falls back to system fonts if the font service is unavailable

## Website features

- **Home:** introduction, profile-photo placeholder, academic interests, project and contact links.
- **About:** education table, three supplied experience role titles with editable detail placeholders, Diploma in Data Analysis / Introduction to Data Science (2024) from AITECH Abuja (IT Training Institute & Tech Solutions), Power BI / Excel / Tableau tools, career-aspiration placeholder, hobby placeholders, and an accessible sample audio player.
- **Projects:** a separate actual-work section with seven supplied project titles and tools—Titanic Data Analysis (Microsoft Excel), Soda Sales Analysis (Microsoft Power BI), HotBites Analysis (Microsoft Power BI), Lagos Flooding Analysis (Microsoft Power BI), Car Sales Analysis (Tableau), Variance Analysis (Tableau), and Brewlytics Sales Performance Analysis (Tableau). Entries include placeholders for screenshots, project files, descriptions, and findings. The seven actual projects are followed by three responsive, clearly labelled sample project demonstrations with illustrative dashboard images, example technologies, and expandable details.
- **Academic planner:** add tasks with a title and due date, optional descriptions, mark tasks complete or pending, delete tasks, filter task lists, clear completed tasks, view live statistics, and restore saved tasks after reopening the page.
- **Contact:** supplied email (`mailto:`), phone (`tel:`), Abuja location, and clickable GitHub profile on Home and Contact; plus required name, email, digits-only phone number, and message fields with inline validation and clear confirmation that a valid form is not transmitted.
- **Shared:** five-page responsive navigation, mobile menu with Escape-key support, skip link, current-year footer, accessible focus states, and reduced-motion preference support.

## Project structure

```text
constant-portfolio/
├── index.html
├── about.html
├── projects.html
├── planner.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── planner.js
│   └── contact.js
├── assets/
│   ├── images/
│   │   ├── constant-home.jpg
│   │   ├── constant-about.jpg
│   │   ├── profile-placeholder.svg (retained; not currently used)
│   │   ├── project-student.svg
│   │   ├── project-sales.svg
│   │   └── project-expenses.svg
│   ├── audio/
│   └── video/
└── README.md
```

## Run locally

1. Download or clone the project folder.
2. From the project folder, start a local static web server. For example, with Python installed:

   ```bash
   python -m http.server 8000
   ```

3. Visit `http://localhost:8000` in a current browser.
4. Open any page from the navigation. No package installation or build step is required.

Alternatively, in VS Code install/use the Live Server extension, right-click `index.html`, and choose **Open with Live Server**. Serving the files from `localhost` is recommended: browser `localStorage` behavior for pages opened directly with `file://` can vary.

## JavaScript behavior

- `js/main.js` opens/closes the responsive navigation, closes it after a navigation choice or Escape, and fills in the current year.
- `js/planner.js` loads and validates the saved task array, renders task items safely with DOM methods, handles form submissions and task/filter actions, updates statistics, and persists changes under the `studentPortfolio.academicTasks` local-storage key. Planner data stays in the current browser profile and is not sent to a server. Clearing browser storage removes saved tasks.
- `js/contact.js` checks that all contact fields are present, validates a basic email format, requires digits only for the phone number, and displays field-specific guidance. A successful result only confirms that validation passed; the form does not send or save the message.

## Personalise images and media

- The Home and About pages use `assets/images/constant-home.jpg` and `assets/images/constant-about.jpg` respectively. To replace either photograph, update that page’s image `src` and descriptive `alt` text. CSS uses `object-fit: cover` to crop the photos without stretching them.
- The project-card SVGs are original illustrations. Replace them with project screenshots only after you have built those projects, and update the alternative text to describe each image accurately.
- The About page's audio player uses MDN's CC0 sample audio as a demonstration. To replace it, add an audio file you own or may distribute (for example `assets/audio/my-sample.mp3`), then change the `<source src>` in `about.html` to that relative path and set the matching MIME type. Keep the visible label and fallback link useful. An audio player is included, so no video file is required.
- The name, university, programme, student status, academic interests, and 2024 qualification are already personalised in `index.html` and `about.html`. In `about.html`, add accurate details for each experience (employer or setting, dates, responsibilities, and optional achievements); the supplied role titles are present, but none of those details have been assumed. Add the education dates and previous institution, career aspirations, and hobbies where bracketed placeholders appear.
- In the actual-project section of `projects.html`, add the real screenshots, project files, detailed descriptions, and verified key findings for each of the seven listed projects. Variance Analysis and Brewlytics Sales Performance Analysis currently have the explicit project-description, screenshot, and findings placeholders requested. The sample demonstrations remain separate and should not be presented as your completed work.
- Contact details are displayed publicly on Home and Contact as requested. The contact form remains a client-side validation demonstration and does not transmit messages.

## Hosting

This is a static website. Publish the project folder to GitHub and enable GitHub Pages from the repository’s main branch and root folder, or upload the files to another static host such as Netlify, Cloudflare Pages, or Azure Static Web Apps. Keep the five HTML pages and their `css/`, `js/`, and `assets/` paths together. Test the hosted pages over HTTPS, especially the audio sample and local-storage planner.

The contact form is not connected to an email service. To receive submissions, implement a secure backend or a reputable form service, explain what data is collected, and update the interface and privacy notice to match the real behavior. Do not put secret keys in front-end files.

## Assessment checklist

| Lecturer requirement | Where it is demonstrated |
|---|---|
| Five separate linked pages and semantic structure | `index.html`, `about.html`, `projects.html`, `planner.html`, `contact.html` |
| Responsive navigation and shared styling | `css/style.css`; navigation markup on every page; `js/main.js` |
| Personal introduction, interests, and project/contact links | `index.html` |
| Education table, career aspiration, skills, hobbies | `about.html` |
| Teaching, SIM Hosting Technician, and SmartSMS Solutions technical-support experience; missing details remain placeholders | `about.html` |
| Diploma in Data Analysis / Introduction to Data Science (2024), awarded by AITECH Abuja (IT Training Institute & Tech Solutions) | `about.html` |
| Microsoft Power BI, Microsoft Excel, and Tableau listed without fabricated proficiency levels | `about.html` |
| Skills presented without fabricated proficiency ratings | `about.html` |
| Seven actual analysis projects with supplied tools and placeholders for screenshots, project files, descriptions, and findings | `projects.html` |
| Three relevant sample project examples, descriptions, images, technologies, details | `projects.html`; `assets/images/project-student.svg`, `project-sales.svg`, `project-expenses.svg` |
| Sample demonstrations separated from actual-project placeholders and labelled as demonstrations | `projects.html` |
| Academic task add, description, due date, completion, deletion, filters, empty state, statistics | `planner.html`; `js/planner.js` |
| JavaScript arrays/functions, events, DOM updates, validation, `localStorage` | `js/planner.js`, `js/contact.js`, `js/main.js` |
| Contact form fields and client-side validation; no false delivery claim | `contact.html`; `js/contact.js` |
| Images with alt text and accessible working media element | `index.html`, `about.html`, `projects.html`; `assets/images/`; About audio player |
| Flexbox, Grid, media queries, responsive typography, hover, transitions, keyframes | `css/style.css` |
| External stylesheet and JavaScript files | `css/style.css`, `js/main.js`, `js/planner.js`, `js/contact.js` |
| Run instructions, structure, features, customization, hosting | This `README.md` |

## Suggested final checks

- Replace the personal placeholders and review the public project content.
- Open each of the five pages and test every navigation link.
- On a narrow viewport, open and close the menu with its button and the Escape key.
- Add a planner task, complete it, filter it, delete or clear it, and reload the page to confirm persistence.
- Submit the contact form empty and with invalid email/phone values; then submit valid sample values and confirm the no-delivery message.
- Check the audio player with an internet connection and verify all local SVG illustrations appear.
- Review the layout at phone, tablet, and desktop widths; confirm keyboard focus and reduced-motion behavior.
