# Tailwind CSS: Directives Not Picking Up in HTML File

This repository demonstrates a common issue encountered when using Tailwind CSS: directives in HTML files not being recognized by the compiler.

## Problem

Even after including the HTML file in the `content` array of the `tailwind.config.js` file, Tailwind CSS fails to apply styles defined by the directives. This often results from an incorrect file path or an incomplete configuration.

## Solution

Ensure that the file paths in the `tailwind.config.js` file accurately reflect the location of the HTML file within your project directory structure.  Thoroughly check for typos and verify that the file exists at the specified path.

## Setup

1. Clone this repository
2. Install dependencies using `npm install` or `yarn install`
3. Run the development server

## Usage

The `bug.js` file contains the initial faulty configuration, whereas the `bugSolution.js` file provides the corrected configuration.