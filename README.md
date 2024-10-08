
<div align="center">
  <h1>Comprehensive Project Overview</h1>
</div>

---

# Travel Tips & Destination Guides(Trekz)
 
## Introduction

## Project Overview
The Travel Tips & Destination Guides platform is designed to bring together a community of travel enthusiasts. It allows users to share personal travel stories, offer tips, and engage with like-minded travelers. Key features include user authentication, post creation and sharing, profile management, and premium content access. The platform is built with scalability in mind, ensuring a smooth and interactive experience across devices.

## Features
- User Authentication: Secure login and registration for users and administrators using JWT-based authentication.
- User Profile Management: Users can update their profiles, upload profile pictures, and follow other users to stay updated with their travel posts.
- Post Creation & Sharing: Users can create and share travel tips, guides, and stories using a rich text editor or Markdown. Posts can include images, categories, and tags.
- Upvote & Downvote System: Users can upvote and downvote posts to highlight valuable content.
- Commenting System: A dynamic commenting system where users can post, edit, delete comments, and reply to others.
- Premium Content Access: Users can pay to access premium content, including exclusive travel tips and guides, via integrated payment gateways like Aamarpay or Stripe.
- Following System: Allows users to follow others and see updates from their favorite travel writers and influencers.
- News Feed: Infinite scrolling news feed with filtering options based on categories, popularity, and upvote counts.
- Profile Verification: Users can verify their profile through payment, unlocking premium features and access to exclusive content.
- Micro Animations: Subtle animations provide a smooth and interactive user experience.
- Responsive Design: Designed for mobile-first responsiveness, ensuring a seamless experience on any device.
- Advanced Search & Filtering: Debounced search with filter options, allowing users to find posts by categories, tags, popularity, and more.

## Technology Stack

- Frontend: Next.js, React, TypeScript, NextUI, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB (NoSQL)
- Authentication: JWT, bcrypt
- Payment Integration: Aamarpay
- Search & Filter: Custom-built search functionality with debouncing
- Hosting: Vercel

## Installation Guideline

Instructions on how to install, configure, and get the project running locally.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn or bun
- MongoDB (local or cloud instance)

### Installation Steps

1. Clone the repository:

- Frontend git clone
```bash
git clone https://github.com/ashiqee/Trekz_frontend.git
cd trekz-fontend
```
- Backend git clone
```bash
git https://github.com/ashiqee/Trekz_backend
cd Trekz_backend
```
2. Install dependencies:
```bash
npm install
# or
yarn install

```


### Configuration

1. Create a `.env` file in the root directory of the project.
2. Add necessary configuration variables in the `.env` file.
   Example:
   ```bash
    NODE_ENV = development
    PORT=5000
    DATABASE_URL = 
    BCRYPT_SALT_ROUNDS=12
    DEFAULT_PASSWORD=

    JWT_ACCESS_SECRET =
    JWT_ACCESS_EXPIRES_IN=10d
    JWT_REFRESH_SECRET =
    JWT_REFRESH_EXPIRES_IN=365d

    STORE_ID = ""
    SIGNETURE_KEY = ""
    PAYMENT_URL="https://sandbox.aamarpay.com/jsonpost.php"
    PAYMENT_VERIFY_URL="https://sandbox.aamarpay.com/api/v1/trxcheck/request.php"
   ```


## L2Batch-3-assignment-5
#### Submission : (Please check my submissions:)


- Frontend Live Link: [Live Website](https://trekz.vercel.app)
- Backend Live Link: [Backend Link](https://travel-tips-backend-wheat.vercel.app)
- GitHub Repository URL (Frontend): https://github.com/ashiqee/Trekz_frontend
- GitHub Repository URL (Backend): https://github.com/ashiqee/Trekz_backend


- Admin Role
```bash
useremail: admin@gmail.com  
password: 123456
```
- User Role
```bash
useremail: user@trekz.com  
password: 123456
```
