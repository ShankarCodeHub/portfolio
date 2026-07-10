import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Coffee,
  Code2,
  Database,
  Server,
  Globe,
  Briefcase,
  GraduationCap,
  FileText,
  ExternalLink,
  Github,
  CheckCircle,
  Download,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Wrench,
  Printer,
  Calendar,
  BookOpen,
  Target,
  Eye
} from 'lucide-react';

import {
  PERSONAL_DETAILS,
  PROJECTS,
  SKILL_CATEGORIES,
  CERTIFICATIONS,
  Project
} from './data/portfolioData';

// Relative path to the generated user photo cutout
const portraitImg = "/images/uma_portrait_1782624449621.jpg";

const renderSkillIcon = (iconName: string) => {
  switch (iconName) {
    case 'html':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 256 256">
          <path d="M0 0h256v256H0z" fill="none" />
          <g fill="none">
            <rect width="256" height="256" fill="#e14e1d" rx="60" />
            <path fill="#fff" d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38z" />
            <path fill="#ebebeb" d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014z" />
          </g>
        </svg>
      );
    case 'css':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 256 256">
          <path d="M0 0h256v256H0z" fill="none" />
          <g fill="none">
            <rect width="256" height="256" fill="#0277bd" rx="60" />
            <path fill="#ebebeb" d="m53.753 102.651l2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164z" />
            <path fill="#fff" d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z" />
          </g>
        </svg>
      );
    case 'javascript':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 256 256">
          <path d="M0 0h256v256H0z" fill="none" />
          <g fill="none">
            <rect width="256" height="256" fill="#f0db4f" rx="60" />
            <path fill="#323330" d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574" />
          </g>
        </svg>
      );
    case 'java':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 256 256">
          <path d="M0 0h256v256H0z" fill="none" />
          <g fill="none">
            <rect width="256" height="256" fill="#242938" rx="60" />
            <path fill="#fff" d="M101.634 182.619s-7.68 4.674 5.345 6.011c15.728 2.004 24.044 1.669 41.407-1.668c0 0 4.674 3.009 11.02 5.344c-39.075 16.696-88.497-1.002-57.772-9.687m-5.009-21.705s-8.35 6.346 4.674 7.679c17.028 1.669 30.391 2.004 53.433-2.667c0 0 3.009 3.341 8.015 5.01c-47.083 14.025-99.85 1.333-66.122-10.019zm92.17 38.07s5.676 4.674-6.346 8.35c-22.376 6.678-93.839 8.685-113.876 0c-7.009-3.009 6.347-7.352 10.686-8.015c4.342-1.002 6.678-1.002 6.678-1.002c-7.68-5.344-51.095 11.02-22.041 15.729c79.813 13.027 145.603-5.676 124.896-15.028zm-83.488-60.781s-36.402 8.685-13.028 11.687c10.019 1.333 29.721 1.002 48.089-.335c15.028-1.334 30.09-4.007 30.09-4.007s-5.345 2.338-9.017 4.674c-37.099 9.693-108.23 5.351-87.858-4.668c17.37-8.35 31.724-7.351 31.724-7.351m65.116 36.401c37.407-19.37 20.037-38.07 8.015-35.731c-3.009.667-4.342 1.334-4.342 1.334s1.001-2.004 3.34-2.667c23.709-8.35 42.413 25.046-7.679 38.07c0 0 .335-.335.666-1.002zm-61.444 52.76c36.067 2.339 91.168-1.334 92.505-18.369c0 0-2.667 6.678-29.72 11.688c-30.722 5.676-68.796 5.009-91.168 1.333c0 0 4.674 4.007 28.386 5.344z" />
            <path fill="#f58219" d="M147.685 28s20.704 21.039-19.702 52.76c-32.394 25.712-7.351 40.408 0 57.101c-19.035-17.028-32.722-32.059-23.377-46.085C118.331 71.083 156.062 61.064 147.685 28M137 123.842c9.683 11.02-2.667 21.039-2.667 21.039s24.711-12.686 13.359-28.387c-10.354-15.028-18.368-22.376 25.046-47.425c0 0-68.46 17.028-35.731 54.766z" />
          </g>
        </svg>
      );
    case 'python':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 256 256">
          <path d="M0 0h256v256H0z" fill="none" />
          <g fill="none">
            <rect width="256" height="256" fill="#f4f2ed" rx="60" />
            <path fill="url(#SVGlrgY0cGU)" d="M127.279 29c-50.772 0-47.602 22.018-47.602 22.018l.057 22.81h48.451v6.85H60.489S28 76.992 28 128.221s28.357 49.414 28.357 49.414h16.924v-23.773s-.912-28.357 27.905-28.357h48.054s26.999.436 26.999-26.094V55.546S180.338 29 127.279 29m-26.716 15.339a8.71 8.71 0 0 1 8.717 8.717a8.71 8.71 0 0 1-8.717 8.716a8.71 8.71 0 0 1-8.716-8.716a8.71 8.71 0 0 1 8.716-8.717" />
            <path fill="url(#SVGk738oeKp)" d="M128.721 227.958c50.772 0 47.602-22.017 47.602-22.017l-.057-22.811h-48.451v-6.849h67.696S228 179.966 228 128.736s-28.357-49.413-28.357-49.413h-16.924v23.773s.912 28.357-27.905 28.357H106.76s-27-.437-27 26.093v43.866s-4.099 26.546 48.961 26.546m26.716-15.339a8.71 8.71 0 0 1-8.717-8.716a8.71 8.71 0 0 1 8.717-8.717a8.71 8.71 0 0 1 8.717 8.717a8.71 8.71 0 0 1-8.717 8.716" />
            <defs>
              <linearGradient id="SVGlrgY0cGU" x1="47.22" x2="146.333" y1="46.896" y2="145.02" gradientUnits="userSpaceOnUse">
                <stop stopColor="#387eb8" />
                <stop offset="1" stopColor="#366994" />
              </linearGradient>
              <linearGradient id="SVGk738oeKp" x1="108.056" x2="214.492" y1="109.905" y2="210.522" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffe052" />
                <stop offset="1" stopColor="#ffc331" />
              </linearGradient>
            </defs>
          </g>
        </svg>
      );
    case 'c':
      return (
        <svg className="w-5 h-5 shrink-0 text-white" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path fill="currentColor" fillRule="evenodd" d="M11.199.914a1.5 1.5 0 0 1 1.602 0l8.5 5.369A1.5 1.5 0 0 1 22 7.55v8.898a1.5 1.5 0 0 1-.699 1.268l-8.5 5.368a1.5 1.5 0 0 1-1.602 0l-8.5-5.368A1.5 1.5 0 0 1 2 16.449V7.55a1.5 1.5 0 0 1 .699-1.268zm1.722 14.096a3.14 3.14 0 0 0 1.583-1.08l2.746 1.57a6.283 6.283 0 1 1 0-7l-2.746 1.57a3.142 3.142 0 1 0-1.583 4.94" clipRule="evenodd" />
        </svg>
      );
    case 'react':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 32 32">
          <path d="M0 0h32v32H0z" fill="none" />
          <path fill="#00bcd4" d="M16 12c7.444 0 12 2.59 12 4s-4.556 4-12 4s-12-2.59-12-4s4.556-4 12-4m0-2c-7.732 0-14 2.686-14 6s6.268 6 14 6s14-2.686 14-6s-6.268-6-14-6" />
          <path fill="#00bcd4" d="M16 14a2 2 0 1 0 2 2a2 2 0 0 0-2-2" />
          <path fill="#00bcd4" d="M10.458 5.507c2.017 0 5.937 3.177 9.006 8.493c3.722 6.447 3.757 11.687 2.536 12.392a.9.9 0 0 1-.457.1c-2.017 0-5.938-3.176-9.007-8.492C8.814 11.553 8.779 6.313 10 5.608a.9.9 0 0 1 .458-.1m-.001-2A2.87 2.87 0 0 0 9 3.875C6.13 5.532 6.938 12.304 10.804 19c3.284 5.69 7.72 9.493 10.74 9.493A2.87 2.87 0 0 0 23 28.124c2.87-1.656 2.062-8.428-1.804-15.124c-3.284-5.69-7.72-9.493-10.74-9.493Z" />
          <path fill="#00bcd4" d="M21.543 5.507a.9.9 0 0 1 .457.1c1.221.706 1.186 5.946-2.536 12.393c-3.07 5.316-6.99 8.493-9.007 8.493a.9.9 0 0 1-.457-.1C8.779 25.686 8.814 20.446 12.536 14c3.07-5.316 6.99-8.493 9.007-8.493m0-2c-3.02 0-7.455 3.804-10.74 9.493C6.939 19.696 6.13 26.468 9 28.124a2.87 2.87 0 0 0 1.457.369c3.02 0 7.455-3.804 10.74-9.493C25.061 12.304 25.87 5.532 23 3.876a2.87 2.87 0 0 0-1.457-.369" />
        </svg>
      );
    case 'node':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 512 512">
          <path d="M0 0h512v512H0z" fill="none" />
          <linearGradient id="SVGRm2eHb6C" x1="277.292" x2="118.519" y1="461.638" y2="89.76" gradientTransform="matrix(1 0 0 -1 53.428 542.628)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#3f8b3d" />
            <stop offset=".64" stopColor="#3f873f" />
            <stop offset=".93" stopColor="#3da92e" />
            <stop offset="1" stopColor="#3dae2b" />
          </linearGradient>
          <path fill="url(#SVGRm2eHb6C)" d="M268.1 3.2c-7.5-4.3-16.7-4.3-24.2 0L44.6 119c-7.6 4.3-11.8 12.4-11.8 21v232c0 8.6 4.7 16.7 11.8 21L244 508.8c7.5 4.3 16.7 4.3 24.2 0L467.4 393c7.6-4.3 11.8-12.4 11.8-21V140c0-8.6-4.7-16.7-11.8-21z" />
          <linearGradient id="SVGXrnPBb2h" x1="171.637" x2="677.901" y1="269.999" y2="541.653" gradientTransform="matrix(1 0 0 -1 53.428 542.628)" gradientUnits="userSpaceOnUse">
            <stop offset=".14" stopColor="#3f873f" />
            <stop offset=".4" stopColor="#52a044" />
            <stop offset=".71" stopColor="#64b749" />
            <stop offset=".91" stopColor="#6abf4b" />
          </linearGradient>
          <path fill="url(#SVGXrnPBb2h)" d="M467.4 119L268.1 3.2c-5.9-3.4-12.9-4-19.3-2L37 385.5c2 3 4.5 5.6 7.5 7.5l199.4 115.8c6.1 3.5 13.2 4 19.7 1.8l211.2-384.3c-1.9-2.9-4.4-5.5-7.4-7.3" />
          <linearGradient id="SVGSAF7ZYPg" x1="-18.131" x2="432.053" y1="286.639" y2="286.639" gradientTransform="matrix(1 0 0 -1 53.428 542.628)" gradientUnits="userSpaceOnUse">
            <stop offset=".09" stopColor="#6abf4b" />
            <stop offset=".29" stopColor="#64b749" />
            <stop offset=".6" stopColor="#52a044" />
            <stop offset=".86" stopColor="#3f873f" />
          </linearGradient>
          <path fill="url(#SVGSAF7ZYPg)" d="M243.9 3.2L44.6 119c-3.3 1.8-5.8 4.5-7.7 7.5l211.5 384.1c6.5 2.2 13.6 1.7 19.7-1.8L467.4 393c3.1-1.7 5.5-4.2 7.4-7L263.2 1.2c-6.4-2-13.4-1.4-19.3 2" />
        </svg>
      );
    case 'git':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 256 256">
          <path d="M0 0h256v256H0z" fill="none" />
          <g fill="none">
            <rect width="256" height="256" fill="#f03c2e" rx="60" />
            <g clipPath="url(#SVGg3D4Hd7H)">
              <path fill="#fff" d="m224.225 119.094l-87.319-87.319a12.87 12.87 0 0 0-14.035-2.793a12.9 12.9 0 0 0-4.177 2.793L100.569 49.9l23 23c5.35-1.875 11.475-.594 15.737 3.669a15.31 15.31 0 0 1 3.631 15.831l22.169 22.169c5.363-1.85 11.55-.657 15.831 3.637a15.32 15.32 0 0 1 3.321 16.706a15.333 15.333 0 0 1-20.029 8.293c-1.86-.771-3.55-1.9-4.973-3.324c-4.5-4.5-5.612-11.125-3.337-16.669l-20.675-20.675v54.407a15.6 15.6 0 0 1 4.062 2.9a15.326 15.326 0 0 1-21.675 21.675a15.32 15.32 0 0 1-3.326-16.704a15.3 15.3 0 0 1-3.326-4.971c1.481-1.475 3.125-2.594 5.019-3.344v-54.913a15.2 15.2 0 0 1-5.019-3.343a15.315 15.315 0 0 1-3.3-16.757L91.644 58.814l-59.875 59.812a12.88 12.88 0 0 0-2.795 14.04a12.9 12.9 0 0 0 2.795 4.179l87.325 87.312a12.9 12.9 0 0 0 4.177 2.793a12.9 12.9 0 0 0 9.858 0a12.9 12.9 0 0 0 4.177-2.793l86.919-86.781a12.88 12.88 0 0 0 3.776-9.109a12.88 12.88 0 0 0-3.776-9.11" />
            </g>
            <defs>
              <clipPath id="SVGg3D4Hd7H">
                <path fill="#fff" d="M28 28h200v200H28z" />
              </clipPath>
            </defs>
          </g>
        </svg>
      );
    case 'github':
      return (
        <svg className="w-5 h-5 shrink-0 text-white" viewBox="0 0 512 512">
          <path d="M0 0h512v512H0z" fill="none" />
          <path fillRule="evenodd" fill="currentColor" d="M256 6.3C114.6 6.3 0 120.9 0 262.3c0 113.3 73.3 209 175 242.9c12.8 2.2 17.6-5.4 17.6-12.2c0-6.1-.3-26.2-.3-47.7c-64.3 11.8-81-15.7-86.1-30.1c-2.9-7.4-15.4-30.1-26.2-36.2c-9-4.8-21.8-16.6-.3-17c20.2-.3 34.6 18.6 39.4 26.2c23 38.7 59.8 27.8 74.6 21.1c2.2-16.6 9-27.8 16.3-34.2c-57-6.4-116.5-28.5-116.5-126.4c0-27.8 9.9-50.9 26.2-68.8c-2.6-6.4-11.5-32.6 2.6-67.8c0 0 21.4-6.7 70.4 26.2c20.5-5.8 42.2-8.6 64-8.6s43.5 2.9 64 8.6c49-33.3 70.4-26.2 70.4-26.2c14.1 35.2 5.1 61.4 2.6 67.8c16.3 17.9 26.2 40.6 26.2 68.8c0 98.2-59.8 120-116.8 126.4c9.3 8 17.3 23.4 17.3 47.4c0 34.2-.3 61.8-.3 70.4c0 6.7 4.8 14.7 17.6 12.2C438.7 471.3 512 375.3 512 262.3c0-141.4-114.6-256-256-256" />
        </svg>
      );
    case 'vscode':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 256 256">
          <path d="M0 0h256v256H0z" fill="none" />
          <g fill="none">
            <rect width="256" height="256" fill="#f4f2ed" rx="60" />
            <path fill="#2489ca" d="M33.716 100.208s-4.735-3.413.947-7.97l13.236-11.836s3.788-3.985 7.792-.513l122.149 92.479v44.346s-.059 6.964-8.996 6.194z" />
            <path fill="#1070b3" d="m65.2 128.792l-31.484 28.623s-3.236 2.407 0 6.708l14.617 13.295s3.472 3.729 8.601-.513l33.378-25.309z" />
            <path fill="#0877b9" d="m120.474 129.029l57.741-44.09l-.375-44.109s-2.466-9.627-10.692-4.616l-76.836 69.931z" />
            <path fill="#3c99d4" d="M168.844 222.968c3.354 3.432 7.418 2.308 7.418 2.308l44.997-22.173c5.76-3.926 4.951-8.798 4.951-8.798V61.898c0-5.82-5.958-7.831-5.958-7.831l-38.999-18.8c-8.522-5.267-14.105.947-14.105.947s7.18-5.168 10.692 4.616v175.075a8 8 0 0 1-.769 3.453c-1.026 2.071-3.255 4.004-8.601 3.195z" />
          </g>
        </svg>
      );
    case 'intellij':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 256 256">
          <path d="M0 0h256v256H0z" fill="none" />
          <defs>
            <linearGradient id="SVGMwiHTb4g" x1="37.036%" x2="178.13%" y1="51.017%" y2="41.861%">
              <stop offset="9%" stopColor="#fc801d" />
              <stop offset="23%" stopColor="#b07f61" />
              <stop offset="41%" stopColor="#577db3" />
              <stop offset="53%" stopColor="#1e7ce6" />
              <stop offset="59%" stopColor="#087cfa" />
            </linearGradient>
            <linearGradient id="SVGLrMzgcLy" x1="73.557%" x2="35.575%" y1="114.76%" y2="1.075%">
              <stop offset="0%" stopColor="#fe2857" />
              <stop offset="8%" stopColor="#cb3979" />
              <stop offset="16%" stopColor="#9e4997" />
              <stop offset="25%" stopColor="#7557b2" />
              <stop offset="34%" stopColor="#5362c8" />
              <stop offset="44%" stopColor="#386cda" />
              <stop offset="54%" stopColor="#2373e8" />
              <stop offset="66%" stopColor="#1478f2" />
              <stop offset="79%" stopColor="#0b7bf8" />
              <stop offset="100%" stopColor="#087cfa" />
            </linearGradient>
            <linearGradient id="SVGf77dfdJi" x1="28.551%" x2="81.801%" y1="23.614%" y2="129.755%">
              <stop offset="0%" stopColor="#fe2857" />
              <stop offset="8%" stopColor="#fe295f" />
              <stop offset="21%" stopColor="#ff2d76" />
              <stop offset="30%" stopColor="#ff318c" />
              <stop offset="38%" stopColor="#ea3896" />
              <stop offset="55%" stopColor="#b248ae" />
              <stop offset="79%" stopColor="#5a63d6" />
              <stop offset="100%" stopColor="#087cfa" />
            </linearGradient>
          </defs>
          <path fill="url(#SVGMwiHTb4g)" d="M40.533 180.56L2.88 150.827l22.16-41.04l33.307 11.146z" />
          <path fill="#087cfa" d="m256 68.24l-4.613 148.267L152.773 256l-53.706-34.667z" />
          <path fill="url(#SVGLrMzgcLy)" d="m256 68.24l-48.8 47.6l-62.667-76.88l30.934-34.773z" />
          <path fill="url(#SVGf77dfdJi)" d="M99.067 221.333L20.64 249.68l16.427-57.52l21.28-71.227L0 101.413L37.067 0l83.786 9.893L207.2 115.84z" />
          <path d="M49.147 48h160v160h-160z" />
          <path fill="#fff" d="M69.093 177.76h60v10h-60zM99.04 78.987V68.053H69.2v10.934h8.373v37.76H69.2v10.933h29.84v-10.933h-8.347v-37.76zm28.427 49.44l.186.106a23.7 23.7 0 0 1-11.706-2.666a27.1 27.1 0 0 1-7.787-6.294l8.24-9.2a23.6 23.6 0 0 0 5.173 4.374a10.67 10.67 0 0 0 5.734 1.6a7.6 7.6 0 0 0 5.84-2.32a11.1 11.1 0 0 0 2.133-7.547V68h13.333v39.067a27 27 0 0 1-1.466 9.306a17.3 17.3 0 0 1-10.854 10.667a26.3 26.3 0 0 1-8.826 1.387" />
        </svg>
      );
    case 'mongodb':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 256 256">
          <path d="M0 0h256v256H0z" fill="none" />
          <g fill="none">
            <rect width="256" height="256" fill="#023430" rx="60" />
            <path fill="#10aa50" d="M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99 99 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862c-7.047 6.283-36.977 30.673-39.496 83.486c-2.347 49.242 36.2 79.605 41.292 82.744c3.916 1.927 8.685.041 11.012-1.728c18.581-12.752 43.969-46.75 35.786-94.773" />
            <path fill="#b8c4c2" d="M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235c0 0 1.617 11.603 2.753 23.894h4.019a224 224 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397" />
            <path fill="#12924f" d="M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a500 500 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92 92 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609c8.203 47.941-17.047 81.849-35.608 94.684" />
          </g>
        </svg>
      );
    default:
      return null;
  }
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [projectFilter, setProjectFilter] = useState<'All' | 'Full-Stack' | 'Backend' | 'Frontend'>('All');
  
  // Contact form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState(false);

  useEffect(() => {
    if (!isResumeDropdownOpen) return;
    const handleClose = () => setIsResumeDropdownOpen(false);
    window.addEventListener('click', handleClose);
    return () => window.removeEventListener('click', handleClose);
  }, [isResumeDropdownOpen]);

  // Monitor scroll to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    
    // Read the Web3Forms access key from environment variables
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";
    
    if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      console.warn("Web3Forms Access Key is not configured. Please get a free key from https://web3forms.com and add VITE_WEB3FORMS_ACCESS_KEY to your .env file.");
      
      // Fallback simulation so the UI behaves normally
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1000);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "Portfolio Contact Form",
          subject: `New Portfolio Message from ${formData.name}`
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error("Web3Forms Error:", result.message);
        setIsSubmitting(false);
        alert(`Form submission error: ${result.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setIsSubmitting(false);
      alert("Something went wrong. Please check your internet connection.");
    }
  };

  const filteredProjects = PROJECTS.filter(
    (proj) => projectFilter === 'All' || proj.type === projectFilter
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans relative overflow-x-hidden bg-grid ${isDark ? 'bg-[#030712] text-gray-100' : 'bg-[#f8fafc] text-gray-900'}`}>
      
      {/* Dynamic ambient background glows */}
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-radial-gradient -z-10 pointer-events-none transition-opacity duration-300 ${isDark ? 'opacity-50' : 'opacity-25'}`} />
      <div className={`absolute top-[800px] left-0 w-[600px] h-[600px] bg-radial-gradient-secondary -z-10 pointer-events-none transition-opacity duration-300 ${isDark ? 'opacity-40' : 'opacity-15'}`} />
      <div className={`absolute bottom-20 right-10 w-[500px] h-[500px] bg-radial-gradient -z-10 pointer-events-none transition-opacity duration-300 ${isDark ? 'opacity-30' : 'opacity-10'}`} />

      {/* HEADER / NAVIGATION */}
      <header className={`fixed top-0 left-0 w-full z-40 border-b backdrop-blur-md transition-all duration-300 ${isDark ? 'glass border-gray-800/50' : 'bg-white/85 border-gray-200/80 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className={`w-14 h-14 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 flex items-center justify-center border ${isDark ? 'shadow-indigo-500/10 border-gray-850 group-hover:scale-105' : 'shadow-gray-200 border-gray-200 group-hover:scale-105'}`}>
              <img
                src="/images/logo.jpg"
                alt="US Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`font-display font-bold text-lg tracking-tight transition-colors duration-300 ${isDark ? 'text-white group-hover:text-indigo-400' : 'text-gray-900 group-hover:text-indigo-600'}`}>
              Uma Shankar
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'certifications', label: 'Certifications' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-indigo-400 bg-indigo-500/10 border border-indigo-500/20'
                    : (isDark ? 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent' : 'text-gray-600 hover:text-black hover:bg-gray-100 border border-transparent')
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2.5 rounded-lg border transition-all duration-300 ml-2 hover:scale-105 active:scale-95 cursor-pointer ${
                isDark 
                  ? 'bg-gray-900/60 border-gray-800 text-indigo-400 hover:text-white hover:bg-white/5' 
                  : 'bg-white border-gray-200 text-indigo-600 hover:text-indigo-800 hover:bg-gray-100'
              }`}
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 25 24">
                  <path d="M0 0h25v24H0z" fill="none" />
                  <path fill="currentColor" d="m16.07 3.344l-1.428.781l1.428.781l.781 1.428l.781-1.428l1.428-.781l-1.428-.781l-.78-1.428zM2.226 12c0-5.523 4.477-10 10-10h1.734l-.868 1.5c-.579 1-.866 2.189-.866 3.5a7 7 0 0 0 8.348 6.87l1.682-.327l-.543 1.626A10 10 0 0 1 12.227 22c-5.523 0-10-4.477-10-10m18.5-5.584l.914 1.67L23.31 9l-1.67.914l-.914 1.67l-.913-1.67L18.143 9l1.67-.914z" />
                </svg>
              )}
            </button>
          </nav>

          {/* Mobile Right Controls */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg border transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
                isDark 
                  ? 'bg-gray-900/60 border-gray-800 text-indigo-400' 
                  : 'bg-white border-gray-200 text-indigo-600'
              }`}
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 25 24">
                  <path d="M0 0h25v24H0z" fill="none" />
                  <path fill="currentColor" d="m16.07 3.344l-1.428.781l1.428.781l.781 1.428l.781-1.428l1.428-.781l-1.428-.781l-.78-1.428zM2.226 12c0-5.523 4.477-10 10-10h1.734l-.868 1.5c-.579 1-.866 2.189-.866 3.5a7 7 0 0 0 8.348 6.87l1.682-.327l-.543 1.626A10 10 0 0 1 12.227 22c-5.523 0-10-4.477-10-10m18.5-5.584l.914 1.67L23.31 9l-1.67.914l-.914 1.67l-.913-1.67L18.143 9l1.67-.914z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isDark ? 'text-gray-400 hover:text-white hover:bg-white/5' : 'text-gray-600 hover:text-black hover:bg-gray-100'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden border-t px-6 py-6 space-y-3 transition-colors duration-300 ${isDark ? 'border-gray-800 bg-[#070a13]' : 'border-gray-200 bg-white shadow-lg'}`}
            >
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'certifications', label: 'Certifications' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    activeSection === item.id
                      ? 'text-indigo-400 bg-indigo-500/10 border-l-4 border-indigo-500'
                      : (isDark ? 'text-gray-400 hover:text-white hover:bg-white/5' : 'text-gray-600 hover:text-black hover:bg-gray-50')
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 flex items-center relative min-h-[90vh]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col space-y-6 sm:space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 inline-flex items-center space-x-2 shadow-sm shadow-indigo-500/5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                  <span>{PERSONAL_DETAILS.badge}</span>
                </span>
              </div>

              {/* Headings */}
              <div className="space-y-2">
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Hi, I am <span className={`text-transparent bg-clip-text bg-gradient-to-r transition-all duration-300 ${isDark ? 'from-white via-indigo-100 to-indigo-400' : 'from-gray-900 via-indigo-800 to-indigo-600'}`}>{PERSONAL_DETAILS.name}</span>
                </h1>
                <p className="text-2xl sm:text-3xl font-bold text-indigo-400 tracking-wide">
                  {PERSONAL_DETAILS.role}
                </p>
              </div>

              {/* Description */}
              <p className={`text-base sm:text-lg leading-relaxed max-w-xl transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {PERSONAL_DETAILS.tagline}
              </p>

              {/* Technologies Highlights */}
              <div className="flex flex-wrap gap-2.5 py-2">
                {['C', 'Java', 'JavaScript', 'SQL'].map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 text-xs font-medium rounded-md border transition-all duration-300 ${
                      isDark 
                        ? 'bg-gray-900/60 text-gray-300 border-gray-800/80 hover:border-indigo-500/30' 
                        : 'bg-white text-gray-700 border-gray-200 hover:border-indigo-500/30 hover:shadow-sm'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <div className="relative w-full sm:w-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsResumeDropdownOpen(!isResumeDropdownOpen);
                    }}
                    className="w-full px-8 py-4 rounded-xl text-sm font-semibold tracking-wide bg-gradient-to-r from-indigo-500 to-violet-500 text-gray-950 hover:from-indigo-400 hover:to-violet-400 transition-all duration-300 shadow-lg shadow-indigo-500/20 flex items-center justify-center space-x-2.5 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Resume</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-300" style={{ transform: isResumeDropdownOpen ? 'rotate(180deg)' : 'none' }} />
                  </button>

                  <AnimatePresence>
                    {isResumeDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute left-0 mt-2 w-48 rounded-xl border p-1.5 shadow-xl z-20 transition-all duration-300 ${
                          isDark 
                            ? 'bg-gray-900/95 border-gray-800 backdrop-blur-md' 
                            : 'bg-white/95 border-gray-200 backdrop-blur-md shadow-gray-200/50'
                        }`}
                      >
                        <a
                          href="/images/resume.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className={`flex items-center space-x-2.5 px-4 py-3 rounded-lg text-xs font-semibold transition-colors duration-300 ${
                            isDark 
                              ? 'text-gray-300 hover:text-white hover:bg-white/5' 
                              : 'text-gray-700 hover:text-black hover:bg-gray-100'
                          }`}
                        >
                          <span className="text-base leading-none">👁️</span>
                          <span>View Resume</span>
                        </a>
                        <a
                          href="/images/resume.pdf"
                          download="Uma_Shankar_Resume.pdf"
                          className={`flex items-center space-x-2.5 px-4 py-3 rounded-lg text-xs font-semibold transition-colors duration-300 ${
                            isDark 
                              ? 'text-gray-300 hover:text-white hover:bg-white/5' 
                              : 'text-gray-700 hover:text-black hover:bg-gray-100'
                          }`}
                        >
                          <span className="text-base leading-none">⬇️</span>
                          <span>Download Resume</span>
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <a
                  href="#projects"
                  className={`px-8 py-4 rounded-xl text-sm font-semibold tracking-wide border transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-[1.03] active:scale-[0.98] ${
                    isDark 
                      ? 'border-gray-800 hover:border-indigo-500/30 text-gray-300 hover:text-white hover:bg-white/5' 
                      : 'border-gray-300 hover:border-indigo-500/30 text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                  }`}
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Quick Contacts */}
              <div className={`flex flex-wrap items-center gap-y-3 gap-x-6 pt-4 text-sm border-t transition-colors duration-300 ${isDark ? 'text-gray-400 border-gray-850' : 'text-gray-600 border-gray-200'}`}>
                <a href={`mailto:${PERSONAL_DETAILS.email}`} className={`flex items-center space-x-2 transition-colors duration-300 ${isDark ? 'hover:text-indigo-400' : 'hover:text-indigo-600'}`}>
                  <svg className="w-4.5 h-4.5 shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <g fill="none">
                      <path fill="#fff" d="M23.249 3.82H.75v16.36h22.5z" />
                      <path fill="#bbd8ff" d="M20.999 18.136H3.001L.751 20.18H23.25z" />
                      <path stroke="#092f63" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} d="M23.249 3.82L12 15.374L.751 3.819m0 16.362l8.283-7.67m5.932 0l8.283 7.67" />
                      <path stroke="#092f63" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} d="M23.249 3.82H.75v16.36h22.5z" />
                    </g>
                  </svg>
                  <span>{PERSONAL_DETAILS.email}</span>
                </a>
                <span className="flex items-center space-x-2">
                  <svg className="w-4.5 h-4.5 shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="#1a73e8" d="M14.462.391a8.33 8.33 0 0 0-8.91 2.586l3.945 3.316Z" />
                    <path fill="#ea4335" d="M5.552 2.977a8.3 8.3 0 0 0-1.947 5.356a9.3 9.3 0 0 0 .824 3.976l5.068-6.016Z" />
                    <path fill="#4285f4" d="M11.938 5.15a3.183 3.183 0 0 1 3.193 3.183a3.15 3.15 0 0 1-.762 2.06l4.964-5.902A8.36 8.36 0 0 0 14.461.37L9.497 6.293a3.16 3.16 0 0 1 2.441-1.143" />
                    <path fill="#fbbc04" d="M11.938 11.526a3.193 3.193 0 0 1-3.193-3.193a3.16 3.16 0 0 1 .752-2.06l-5.068 6.035a29.5 29.5 0 0 0 3.78 5.408l6.18-7.323a3.16 3.16 0 0 1-2.451 1.133" />
                    <path fill="#34a853" d="M14.256 19.714c2.78-4.346 6.015-6.324 6.015-11.33a8.34 8.34 0 0 0-.938-3.842L8.21 17.716c.474.618.948 1.277 1.412 1.998c1.699 2.616 1.225 4.182 2.317 4.182s.618-1.566 2.317-4.182" />
                  </svg>
                  <span>{PERSONAL_DETAILS.location}</span>
                </span>
              </div>

            </motion.div>

            {/* Right Image Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex justify-center lg:justify-end relative"
            >
              <div className="relative w-full max-w-[450px] sm:max-w-[480px] lg:max-w-[500px]">
                
                {/* Glow ring backing */}
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-indigo-500 to-violet-400 opacity-25 blur-xl -z-10 animate-pulse-glow" style={{ top: '50%', left: '50%' }} />

                {/* Subtly animated floating container */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className={`relative aspect-[3/4] rounded-3xl overflow-hidden border transition-all duration-300 ${isDark ? 'shadow-card border-indigo-500/20 backdrop-blur-sm glow-indigo' : 'shadow-xl border-indigo-500/30'}`}
                >
                  {/* Portrait Image */}
                  <img
                    src={portraitImg}
                    alt={PERSONAL_DETAILS.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top scale-102 hover:scale-105 transition-transform duration-700"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 pointer-events-none transition-colors duration-300 ${isDark ? 'from-[#030712]' : 'from-[#f8fafc]'}`} />
                  
                  {/* Bottom Portrait Tag */}
                  <div className={`absolute bottom-4 left-4 right-4 backdrop-blur-md px-4 py-3 rounded-xl border flex items-center justify-between transition-colors duration-300 ${isDark ? 'bg-gray-950/80 border-gray-850' : 'bg-white/95 border-gray-200 shadow-md'}`}>
                    <div>
                      <h4 className={`text-sm font-bold leading-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{PERSONAL_DETAILS.name}</h4>
                      <p className="text-xs text-indigo-400 leading-none">Class of 2027 • CSE</p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                      <Sparkles className="w-4.5 h-4.5 text-indigo-400" />
                    </div>
                  </div>
                </motion.div>
                
                {/* Tech Badges orbiting or positioned strategically */}
                <div className={`absolute -top-4 -left-4 backdrop-blur-md px-3.5 py-2 rounded-xl border shadow-md flex items-center space-x-2 transition-all duration-300 ${isDark ? 'bg-gray-900/90 border-gray-800' : 'bg-white/95 border-gray-200'}`}>
                  <div className="w-6 h-6 rounded-md bg-indigo-500/10 flex items-center justify-center">
                    <Coffee className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                  <span className={`text-xs font-mono font-bold transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Java</span>
                </div>

                <div className={`absolute bottom-12 -right-4 backdrop-blur-md px-3.5 py-2 rounded-xl border shadow-md flex items-center space-x-2 transition-all duration-300 ${isDark ? 'bg-gray-900/90 border-gray-800' : 'bg-white/95 border-gray-200'}`}>
                  <div className="w-6 h-6 rounded-md bg-violet-500/10 flex items-center justify-center animate-spin" style={{ animationDuration: '8s' }}>
                    <Code2 className="w-3.5 h-3.5 text-violet-400" />
                  </div>
                  <span className={`text-xs font-mono font-bold transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>React</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>      {/* ACADEMIC JOURNEY SECTION */}
      <section id="about" className={`py-20 border-t transition-colors duration-300 relative ${isDark ? 'border-gray-900/80 bg-gray-950/20' : 'border-gray-200 bg-gray-50/50'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold font-mono tracking-widest text-indigo-400 uppercase">Profile</span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Academic Journey</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Side: Personal Background & Goals */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* About Me */}
              <div className="space-y-3">
                <h3 className={`text-xl font-bold flex items-center space-x-2.5 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <span className="text-indigo-400 font-mono text-sm">01.</span>
                  <span>About Me</span>
                </h3>
                <p className={`leading-relaxed text-base transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {PERSONAL_DETAILS.about}
                </p>
                <p className={`leading-relaxed text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  As a pre-final year B.Tech student, I ground my development work in solid computer science foundations. I bridge academic algorithms and systems with modern, responsive React apps and secure Java backends.
                </p>
              </div>

              {/* Education & Current Focus */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-xs font-bold font-mono text-indigo-400 uppercase tracking-wider flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 shrink-0" />
                    <span>Education</span>
                  </h4>
                  <div className={`p-4 rounded-xl border space-y-1 transition-colors duration-300 ${isDark ? 'bg-gray-900/40 border-gray-800' : 'bg-white border-gray-200 shadow-sm'}`}>
                    <h5 className={`text-sm font-bold transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>B.Tech in CSE</h5>
                    <p className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Dev Bhoomi Uttarakhand University</p>
                    <p className={`text-[11px] font-mono mt-1 transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Class of 2023 – 2027</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold font-mono text-indigo-400 uppercase tracking-wider flex items-center space-x-2">
                    <Cpu className="w-4 h-4 shrink-0" />
                    <span>Current Focus</span>
                  </h4>
                  <div className={`p-4 rounded-xl border space-y-1 transition-colors duration-300 ${isDark ? 'bg-gray-900/40 border-gray-800' : 'bg-white border-gray-200 shadow-sm'}`}>
                    <h5 className={`text-sm font-bold transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Full-Stack Development</h5>
                    <p className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Scalable APIs & React Micro-frontends</p>
                    <p className="text-[11px] text-indigo-400 font-medium font-mono mt-1">DSA & GATE Preparation</p>
                  </div>
                </div>
              </div>

              {/* Career Goals & Achievements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-xs font-bold font-mono text-indigo-400 uppercase tracking-wider flex items-center space-x-2">
                    <Briefcase className="w-4 h-4 shrink-0" />
                    <span>Career Goals</span>
                  </h4>
                  <div className={`p-4 rounded-xl border space-y-2 transition-colors duration-300 ${isDark ? 'bg-gray-900/40 border-gray-800' : 'bg-white border-gray-200 shadow-sm'}`}>
                    <h5 className={`text-sm font-bold transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Software Engineer</h5>
                    <p className={`text-xs leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Aspiring to build reliable, high-performance backends and user-centric features for modern software companies.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold font-mono text-indigo-400 uppercase tracking-wider flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>Key Achievements</span>
                  </h4>
                  <div className={`p-4 rounded-xl border space-y-2 text-xs transition-colors duration-300 ${isDark ? 'bg-gray-900/40 border-gray-800 text-gray-400' : 'bg-white border-gray-200 text-gray-600 shadow-sm'}`}>
                    <div className="flex items-start space-x-2">
                      <span className="text-indigo-400 shrink-0">•</span>
                      <span>Built and deployed multiple responsive web applications.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-indigo-400 shrink-0">•</span>
                      <span>Acquired multiple Web & AI certifications.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-indigo-400 shrink-0">•</span>
                      <span>Mentoring junior student developers in local seminars.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small Statistic Cards */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold font-mono text-indigo-400 uppercase tracking-wider">Academic Metrics</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: 'Graduation Year', value: '2027', desc: 'B.Tech CSE' },
                    { label: 'Projects Built', value: '2', desc: 'Frontend & Web' },
                    { label: 'GATE Prep', value: 'Active', desc: 'Aspirant' },
                    { label: 'Internships', value: 'Ready', desc: 'From Mid 2026' }
                  ].map((stat, idx) => (
                    <div key={idx} className={`p-3.5 rounded-xl border flex flex-col justify-center text-center transition-colors duration-300 ${isDark ? 'bg-gray-900/50 border-gray-850' : 'bg-white border-gray-200 shadow-sm'}`}>
                      <span className={`text-[10px] font-mono uppercase tracking-wider transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{stat.label}</span>
                      <span className={`text-xl font-extrabold my-0.5 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{stat.value}</span>
                      <span className="text-[10px] text-indigo-400 font-medium">{stat.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Side: Quick Stats Card */}
            <div className={`lg:col-span-5 p-8 rounded-2xl border shadow-lg relative overflow-hidden group transition-all duration-300 ${isDark ? 'bg-gradient-to-b from-gray-900/60 to-gray-950/60 border-gray-800/80' : 'bg-white border-gray-200 shadow-xl'}`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors duration-500" />
              
              <h3 className={`text-xl font-bold mb-6 flex items-center space-x-2.5 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <span>📊 Quick Stats</span>
              </h3>
              
              <div className="space-y-5">
                {[
                  { label: 'Role Focus', value: 'Frontend Developer', desc: 'UI/UX & Web Integration' },
                  { label: 'Core Framework', value: 'React', desc: 'State Management & Custom Hooks' },
                  { label: 'Main Script', value: 'JavaScript', desc: 'Asynchronous Programming & ES6+' },
                  { label: 'Databases', value: 'SQL', desc: 'Relational Database Queries & Schema' },
                  { label: 'Academic Goal', value: 'GATE Aspirant', desc: 'Preparing for Higher Studies/PSUs' },
                ].map((stat, idx) => (
                  <div key={idx} className={`flex items-start space-x-3.5 p-3 rounded-xl border transition-all duration-300 ${isDark ? 'bg-gray-950/40 border-gray-900/60 hover:border-indigo-500/20 hover:bg-gray-900/10' : 'bg-gray-50 border-gray-150 hover:border-indigo-500/30 hover:bg-indigo-50/10 shadow-sm'}`}>
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center shrink-0">
                      {idx === 0 ? <Briefcase className="w-4 h-4 text-indigo-400" /> :
                       idx === 1 ? <Code2 className="w-4 h-4 text-indigo-400" /> :
                       idx === 2 ? <Code2 className="w-4 h-4 text-indigo-400" /> :
                       idx === 3 ? <Database className="w-4 h-4 text-indigo-400" /> :
                       <Target className="w-4 h-4 text-indigo-400" />}
                    </div>
                    <div className="space-y-0.5">
                      <span className={`text-[10px] font-mono uppercase tracking-wider transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{stat.label}</span>
                      <h4 className={`text-sm font-bold transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-gray-850'}`}>{stat.value}</h4>
                      <p className={`text-xs leading-snug transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Side: Learning Timeline */}
          <div className={`border-t pt-16 space-y-8 transition-colors duration-300 ${isDark ? 'border-gray-900/80' : 'border-gray-200'}`}>
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <h3 className={`text-2xl font-bold transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Timeline of Learning</h3>
              <p className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-xl mx-auto`}>
                A visual roadmap of technologies I have learned, leading to my current goal.
              </p>
            </div>

            {/* Timeline Cards Container */}
            <div className="relative">
              {/* Timeline Connector Line */}
              <div className={`absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 hidden lg:block transition-all duration-300 ${isDark ? 'bg-gradient-to-r from-indigo-500/10 via-indigo-500/40 to-violet-500/10' : 'bg-gradient-to-r from-indigo-500/5 via-indigo-500/20 to-violet-500/5'}`} />
              <div className={`absolute top-0 bottom-0 left-6 w-0.5 lg:hidden transition-all duration-300 ${isDark ? 'bg-gradient-to-b from-indigo-500/10 via-indigo-500/40 to-violet-500/10' : 'bg-gradient-to-b from-indigo-500/5 via-indigo-500/20 to-violet-500/5'}`} />

              <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 relative z-1 pl-12 lg:pl-0">
                {[
                  { step: '2023', tech: 'HTML & CSS', desc: 'Foundational markup and styling' },
                  { step: 'Step 2', tech: 'JavaScript', desc: 'Interactive features and asynchronous flows' },
                  { step: 'Step 3', tech: 'React', desc: 'Stateful UI components and hooks' },
                  { step: 'Step 4', tech: 'Node.js', desc: 'Server-side runtimes and APIs' },
                  { step: 'Step 5', tech: 'MongoDB', desc: 'NoSQL storage and schemas' },
                  { step: 'Step 6', tech: 'Java', desc: 'Object-oriented patterns & syntax' },
                  { step: 'Target', tech: 'Software Engineer', desc: 'Current Goal', active: true }
                ].map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Node Dot Indicator */}
                    <div className={`absolute left-[-34px] lg:left-1/2 top-4 lg:top-[-16px] w-6 h-6 rounded-full border-2 -translate-x-1/2 flex items-center justify-center transition-colors duration-300 z-10 ${
                      item.active 
                        ? 'bg-indigo-500 border-indigo-400 shadow-md shadow-indigo-500/50 animate-pulse' 
                        : (isDark ? 'bg-gray-900 border-gray-700 group-hover:border-indigo-400' : 'bg-white border-gray-300 group-hover:border-indigo-500')
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${item.active ? 'bg-white' : (isDark ? 'bg-gray-500 group-hover:bg-indigo-400' : 'bg-gray-300 group-hover:bg-indigo-500')}`} />
                    </div>

                    {/* Content Card */}
                    <div className={`p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between h-full ${
                      item.active 
                        ? (isDark ? 'bg-gradient-to-r from-indigo-950/30 to-violet-950/30 border-indigo-500/50 shadow-md shadow-indigo-500/5' : 'bg-gradient-to-r from-indigo-50 to-violet-50/50 border-indigo-500/40 shadow-md') 
                        : (isDark ? 'bg-gray-900/30 border-gray-850 hover:border-gray-700/80 hover:bg-gray-900/60' : 'bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50/50 shadow-sm')
                    }`}>
                      <div>
                        <span className="text-[9px] font-mono text-indigo-400 uppercase tracking-widest">{item.step}</span>
                        <h4 className={`text-sm font-bold mt-1 group-hover:text-indigo-500 transition-colors duration-300 ${isDark ? 'text-white group-hover:text-indigo-300' : 'text-gray-850'}`}>{item.tech}</h4>
                      </div>
                      <p className={`text-[11px] mt-2 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className={`py-20 border-t relative transition-colors duration-300 ${isDark ? 'border-gray-900/80 bg-[#030712]/10' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold font-mono tracking-widest text-indigo-400 uppercase">Technologies</span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Structured Technical Stack</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((categoryObj, catIdx) => (
              <motion.div
                key={categoryObj.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 shadow-md group relative overflow-hidden ${
                  isDark 
                    ? 'bg-gray-900/40 border-gray-800/80 hover:border-gray-700/80' 
                    : 'bg-gray-50 border-gray-200 hover:border-indigo-500/20 shadow-sm'
                }`}
              >
                {/* Background soft glow */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors duration-500" />
                
                <h3 className={`text-lg font-bold mb-6 border-b pb-3 flex items-center space-x-2.5 transition-colors duration-300 ${isDark ? 'text-white border-gray-800' : 'text-gray-900 border-gray-200'}`}>
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                    {categoryObj.category === 'Languages' ? (
                      <svg className="w-5 h-5" viewBox="0 0 80 80">
                        <path d="M0 0h80v80H0z" fill="none" />
                        <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
                          <path stroke="#2f80ed" d="m30 64.164l20-48" />
                          <path stroke="#9b51e0" d="M23 24.164L5.84 39.417a1 1 0 0 0 0 1.494L23 56.165m34-32.001l17.16 15.253a1 1 0 0 1 0 1.494L57 56.165" />
                        </g>
                      </svg>
                    ) : categoryObj.category === 'Tech Stack' ? (
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.5 19a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M10 5l2-2m-4.5 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m.5 6l8-8M5.5 21a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m13-13a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M12 21l2-2" />
                      </svg>
                    ) : categoryObj.category === 'Tools' ? (
                      <svg className="w-5 h-5" viewBox="0 0 80 80">
                        <path d="M0 0h80v80H0z" fill="none" />
                        <g fill="none">
                          <path fill="#828282" fillRule="evenodd" d="m11.626 20.11l2.042 2.043l.354.353l4.949 4.95l.003-.004l3.155 3.156l6.688-1.792l1.791-6.687l-3.155-3.156l.003-.003l-4.95-4.95l-.353-.353l-2.042-2.042a15.589 15.589 0 0 1 20.255 20.566L64.07 55.895a6 6 0 0 1-8.485 8.485L39.128 47.923a7 7 0 0 0-11.568-6.367A15.59 15.59 0 0 1 11.625 20.11" clipRule="evenodd" />
                          <path stroke="#e0e0e0" strokeLinecap="square" strokeLinejoin="round" strokeWidth="4" d="m37.171 41.828l11.314-11.313" />
                          <path fill="#e0e0e0" d="m62.627 10.716l5.657 5.657l-11.13 13.958l-8.669.184l.184-8.67z" />
                          <path fill="#f2c94c" d="M27.272 41.829a7 7 0 1 1 9.9 9.9L20.907 67.991a2 2 0 0 1-2.829 0l-7.07-7.072a2 2 0 0 1 0-2.828z" />
                          <path fill="#eb5757" fillRule="evenodd" d="m11.626 20.11l2.042 2.042l.353.354l4.95 4.949l.003-.003l3.155 3.155l6.688-1.791l1.791-6.688l-3.155-3.156l.003-.003l-4.95-4.949l-.353-.353l-2.042-2.042a15.59 15.59 0 0 1 16.954 3.394a15.589 15.589 0 1 1-25.44 5.09" clipRule="evenodd" />
                        </g>
                      </svg>
                    ) : (
                      <Cpu className="w-4 h-4" />
                    )}
                  </div>
                  <span>{categoryObj.category}</span>
                </h3>

                <div className="space-y-5">
                  {categoryObj.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center text-xs sm:text-sm">
                        <div className="flex items-center space-x-2.5">
                          {renderSkillIcon(skill.iconName)}
                          <span className={`font-semibold transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
                        </div>
                        <span className="font-mono text-indigo-400">{skill.level}%</span>
                      </div>
                      <div className={`w-full h-1.5 rounded-full overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gray-850' : 'bg-gray-200'}`}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-indigo-500 to-violet-400 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className={`py-20 border-t transition-colors duration-300 relative ${isDark ? 'border-gray-900/80 bg-gray-950/20' : 'border-gray-200 bg-gray-50/50'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold font-mono tracking-widest text-indigo-400 uppercase">Portfolio</span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Featured Academic & SaaS Projects</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-400 mx-auto rounded-full" />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
            {(['All', 'Full-Stack', 'Backend', 'Frontend'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setProjectFilter(filter)}
                className={`px-5 py-2 text-xs sm:text-sm font-medium tracking-wide rounded-lg transition-all duration-300 border ${
                  projectFilter === filter
                    ? 'bg-gradient-to-r from-indigo-500/15 to-violet-500/15 border-indigo-500 text-indigo-400 shadow-md shadow-indigo-500/5'
                    : (isDark ? 'bg-gray-900/40 border-gray-800 text-gray-400 hover:text-white hover:border-gray-700' : 'bg-white border-gray-200 text-gray-600 hover:text-black hover:border-indigo-500/30 shadow-sm')
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className={filteredProjects.length === 1 ? "max-w-2xl mx-auto w-full" : "grid grid-cols-1 md:grid-cols-2 gap-8"}>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`rounded-2xl border overflow-hidden transition-all duration-300 shadow-lg flex flex-col h-full group ${
                    isDark ? 'bg-gray-900/40 border-gray-800/80 hover:border-indigo-500/30' : 'bg-white border-gray-200 hover:border-indigo-500/30 hover:shadow-xl'
                  }`}
                >
                  {/* Card Header Tag */}
                  <div className="px-6 pt-6 pb-2 flex justify-between items-center">
                    <span className="text-xs font-semibold tracking-wider font-mono px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/15">
                      {project.type}
                    </span>
                    <div className="flex items-center space-x-3 text-gray-400">
                      <a
                        href={project.github}
                        className={`p-1.5 rounded transition-colors ${isDark ? 'hover:bg-white/5 hover:text-indigo-400' : 'hover:bg-gray-100 hover:text-indigo-600'}`}
                        title="View Source on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          className={`p-1.5 rounded transition-colors ${isDark ? 'hover:bg-white/5 hover:text-violet-400' : 'hover:bg-gray-100 hover:text-violet-600'}`}
                          title="View Live Demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="px-6 py-4 flex-grow space-y-3">
                    <h3 className={`text-xl font-bold transition-colors duration-300 ${isDark ? 'text-white group-hover:text-indigo-400' : 'text-gray-900 group-hover:text-indigo-600'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-650'}`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="px-6 pb-6 pt-2 flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 text-xs font-mono rounded border transition-colors duration-300 ${
                          isDark ? 'text-gray-300 bg-gray-950 border-gray-850' : 'text-gray-600 bg-gray-100 border-gray-200'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section id="certifications" className={`py-20 border-t transition-colors duration-300 relative ${isDark ? 'border-gray-900/80 bg-[#030712]/10' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold font-mono tracking-widest text-indigo-400 uppercase">Achievements</span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Certifications & Credentials</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATIONS.map((certification, idx) => (
              <motion.div
                key={certification.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`p-6 rounded-2xl border transition-all duration-300 shadow-md flex flex-col justify-between h-full relative overflow-hidden group ${
                  isDark ? 'bg-gray-900/40 border-gray-800/80 hover:border-indigo-500/30' : 'bg-gray-50 border-gray-200 hover:border-indigo-500/30 hover:shadow-lg'
                }`}
              >
                {/* Subtle card ambient background glow on hover */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors duration-500" />
                
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24" className="w-5.5 h-5.5">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M12 16c-5.76 0-6.78-5.74-6.96-10.294c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485C18.781 10.26 17.761 16 12.001 16" opacity=".5" />
                        <path fill="currentColor" d="m17.64 12.422l2.817-1.565c.752-.418 1.128-.627 1.336-.979C22 9.526 22 9.096 22 8.235v-.073c0-1.043 0-1.565-.283-1.958s-.778-.558-1.768-.888L19 5l-.017.085q-.008.283-.022.621c-.088 2.225-.377 4.733-1.32 6.716M5.04 5.706c.087 2.225.376 4.733 1.32 6.716l-2.817-1.565c-.752-.418-1.129-.627-1.336-.979S2 9.096 2 8.235v-.073c0-1.043 0-1.565.283-1.958s.778-.558 1.768-.888L5 5l.017.087q.008.281.022.62" />
                        <path fill="currentColor" fillRule="evenodd" d="M5.25 22a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" clipRule="evenodd" />
                        <path fill="currentColor" d="M15.458 21.25H8.542l.297-1.75a1 1 0 0 1 .98-.804h4.361a1 1 0 0 1 .98.804z" opacity=".5" />
                        <path fill="currentColor" d="M12 16q-.39 0-.75-.034v2.73h1.5v-2.73A8 8 0 0 1 12 16" />
                      </svg>
                    </div>
                    {certification.issued && (
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors duration-300 ${
                        isDark ? 'text-gray-400 bg-gray-950 border-gray-850' : 'text-gray-600 bg-gray-150 border-gray-200'
                      }`}>
                        Issued: {certification.issued}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h3 className={`text-base font-bold transition-colors duration-300 leading-snug ${isDark ? 'text-white group-hover:text-indigo-400' : 'text-gray-900 group-hover:text-indigo-600'}`}>
                      {certification.title}
                    </h3>
                    <p className={`text-xs font-medium transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-650'}`}>
                      {certification.issuer} {certification.platform && `• ${certification.platform}`}
                    </p>
                    {certification.credentialId && (
                      <p className="text-[10px] text-gray-500 font-mono">
                        Credential ID: <span className={`transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{certification.credentialId}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className={`mt-6 pt-4 border-t flex items-center gap-2 transition-colors duration-300 ${isDark ? 'border-gray-850' : 'border-gray-200'}`}>
                  {certification.downloadable ? (
                    <>
                      <a
                        href={certification.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex-1 py-2 text-center text-xs font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-1 active:scale-[0.98] ${
                          isDark 
                            ? 'bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 hover:text-indigo-200 border border-indigo-500/20 hover:border-indigo-500/40' 
                            : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 hover:text-indigo-800 border border-indigo-150 hover:border-indigo-300 shadow-sm'
                        }`}
                      >
                        <Eye className="w-3.5 h-3.5 mr-1" />
                        <span>View</span>
                      </a>
                      <a
                        href={certification.href}
                        download={certification.downloadName}
                        className={`flex-1 py-2 text-center text-xs font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-1 active:scale-[0.98] ${
                          isDark 
                            ? 'bg-gray-950 hover:bg-gray-900 text-gray-400 hover:text-gray-300 border border-gray-850 hover:border-indigo-500/30' 
                            : 'bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-700 border border-gray-250 hover:border-indigo-500/50 shadow-sm'
                        }`}
                      >
                        <Download className="w-3.5 h-3.5 mr-1" />
                        <span>Download</span>
                      </a>
                    </>
                  ) : (
                    <a
                      href={certification.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full py-2.5 text-center text-xs font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-1.5 active:scale-[0.98] ${
                        isDark 
                          ? 'bg-gray-950 hover:bg-gray-900 text-indigo-400 hover:text-indigo-300 border border-gray-850 hover:border-indigo-500/30' 
                          : 'bg-white hover:bg-gray-50 text-indigo-600 hover:text-indigo-700 border border-gray-250 hover:border-indigo-500/50 shadow-sm'
                      }`}
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-1" />
                      <span>{certification.actionLabel}</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT / INQUIRY SECTION */}
      <section id="contact" className={`py-20 border-t relative transition-colors duration-300 ${isDark ? 'border-gray-900/80 bg-transparent' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Info Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold font-mono tracking-widest text-indigo-400 uppercase">Contact</span>
                <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Let's Discuss Internships & Roles</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-400 rounded-full" />
                <p className={`leading-relaxed text-sm sm:text-base pt-2 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-605'}`}>
                  I am actively seeking software engineering internships and junior developer opportunities. If you are looking for a focused Frontend Engineer with strong React skills and modern UI/UX design habits, let's connect!
                </p>
              </div>

              {/* Channels */}
              <div className="space-y-4 my-auto py-4">
                <a
                  href={`mailto:${PERSONAL_DETAILS.email}`}
                  className={`flex items-center p-4 rounded-xl border transition-all group ${
                    isDark 
                      ? 'bg-gray-900/40 border-gray-800 hover:border-indigo-500/30 hover:bg-gray-900/60' 
                      : 'bg-gray-50 border-gray-200 hover:border-indigo-500/30 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 ${isDark ? 'bg-gray-850' : 'bg-gray-150'}`}>
                    <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <g fill="none">
                        <path fill="#fff" d="M23.249 3.82H.75v16.36h22.5z" />
                        <path fill="#bbd8ff" d="M20.999 18.136H3.001L.751 20.18H23.25z" />
                        <path stroke="#092f63" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} d="M23.249 3.82L12 15.374L.751 3.819m0 16.362l8.283-7.67m5.932 0l8.283 7.67" />
                        <path stroke="#092f63" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} d="M23.249 3.82H.75v16.36h22.5z" />
                      </g>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className={`text-xs font-bold uppercase transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Email Me Directly</h4>
                    <p className={`text-sm font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-850'}`}>{PERSONAL_DETAILS.email}</p>
                  </div>
                </a>

                <div className={`flex items-center p-4 rounded-xl border transition-colors duration-300 ${isDark ? 'bg-gray-900/40 border-gray-800' : 'bg-gray-50 border-gray-200 shadow-sm'}`}>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${isDark ? 'bg-gray-800/60' : 'bg-gray-150'}`}>
                    <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path fill="#1a73e8" d="M14.462.391a8.33 8.33 0 0 0-8.91 2.586l3.945 3.316Z" />
                      <path fill="#ea4335" d="M5.552 2.977a8.3 8.3 0 0 0-1.947 5.356a9.3 9.3 0 0 0 .824 3.976l5.068-6.016Z" />
                      <path fill="#4285f4" d="M11.938 5.15a3.183 3.183 0 0 1 3.193 3.183a3.15 3.15 0 0 1-.762 2.06l4.964-5.902A8.36 8.36 0 0 0 14.461.37L9.497 6.293a3.16 3.16 0 0 1 2.441-1.143" />
                      <path fill="#fbbc04" d="M11.938 11.526a3.193 3.193 0 0 1-3.193-3.193a3.16 3.16 0 0 1 .752-2.06l-5.068 6.035a29.5 29.5 0 0 0 3.78 5.408l6.18-7.323a3.16 3.16 0 0 1-2.451 1.133" />
                      <path fill="#34a853" d="M14.256 19.714c2.78-4.346 6.015-6.324 6.015-11.33a8.34 8.34 0 0 0-.938-3.842L8.21 17.716c.474.618.948 1.277 1.412 1.998c1.699 2.616 1.225 4.182 2.317 4.182s.618-1.566 2.317-4.182" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className={`text-xs font-bold uppercase transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>My Location</h4>
                    <p className={`text-sm font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-850'}`}>{PERSONAL_DETAILS.location}</p>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className="flex items-center space-x-4 pt-4 text-gray-450">
                <a href={PERSONAL_DETAILS.github} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg border transition-all shadow ${
                  isDark ? 'bg-gray-900/50 border-gray-800 text-gray-450 hover:text-indigo-400 hover:border-indigo-500/30' : 'bg-gray-50 border-gray-200 text-gray-600 hover:text-indigo-600 hover:border-indigo-500/30 hover:bg-white'
                }`}>
                  <Github className="w-5 h-5" />
                </a>
                <a href={PERSONAL_DETAILS.linkedin} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg border transition-all shadow ${
                  isDark ? 'bg-gray-900/50 border-gray-800 hover:border-blue-500/30' : 'bg-gray-50 border-gray-200 hover:border-blue-500/30 hover:bg-white'
                }`}>
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 256 256" fill="none">
                    <path d="M0 0h256v256H0z" fill="none" />
                    <g fill="none">
                      <rect width="256" height="256" fill="#0a66c2" rx="60" />
                      <path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4" />
                    </g>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Contact Form Column */}
            <div className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border shadow-lg relative transition-all duration-300 ${
              isDark ? 'bg-gradient-to-b from-gray-900/40 to-gray-950/40 border-gray-800/80' : 'bg-white border-gray-200 shadow-xl'
            }`}>
              
              <h3 className={`text-xl font-bold mb-6 flex items-center space-x-2.5 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <svg className="w-5.5 h-5.5 shrink-0" viewBox="0 0 14 14" fill="none">
                  <path d="M0 0h14v14H0z" fill="none" />
                  <g fill="none">
                    <path fill="#8fbffa" d="M7 .25c-2.092 0-3.797.59-4.979 1.771S.25 4.908.25 7s.59 3.797 1.771 4.979S4.908 13.75 7 13.75s3.797-.59 4.979-1.771S13.75 9.092 13.75 7s-.59-3.797-1.771-4.979S9.092.25 7 .25" />
                    <path fill="#2859c5" fillRule="evenodd" d="M9.447 3.334a1.3 1.3 0 0 1 1.204 1.204c.11 1.502-.197 4.102-2.359 6.652c-.53.624-1.517.673-2.05-.028c-.322-.423-.682-.994-.904-1.631l2.119-2.119a.625.625 0 1 0-.884-.884L4.454 8.647c-.637-.222-1.209-.582-1.631-.904c-.7-.533-.653-1.52-.028-2.05c2.55-2.163 5.15-2.469 6.652-2.36" clipRule="evenodd" />
                  </g>
                </svg>
                <span>Quick Inquiry Form</span>
              </h3>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className={`text-xs font-bold uppercase transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className={`w-full border rounded-xl px-4 py-3.5 text-sm transition-colors ${
                        isDark 
                          ? 'bg-gray-950/80 border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500' 
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500'
                      }`}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className={`text-xs font-bold uppercase transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="johndoe@example.com"
                      className={`w-full border rounded-xl px-4 py-3.5 text-sm transition-colors ${
                        isDark 
                          ? 'bg-gray-950/80 border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500' 
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500'
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className={`text-xs font-bold uppercase transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className={`w-full border rounded-xl px-4 py-3.5 text-sm transition-colors resize-none ${
                      isDark 
                        ? 'bg-gray-950/80 border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500' 
                        : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500'
                    }`}
                  />
                </div>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-xl text-sm flex items-center space-x-2.5"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>Inquiry sent successfully! Thank you. I will respond to your email shortly.</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-sm font-semibold tracking-wide bg-gradient-to-r from-indigo-500 to-violet-500 text-gray-950 hover:from-indigo-400 hover:to-violet-400 disabled:opacity-50 transition-all duration-300 shadow-md flex items-center justify-center space-x-2.5 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <svg className="w-4.5 h-4.5 shrink-0" viewBox="0 0 14 14" fill="none">
                    <path d="M0 0h14v14H0z" fill="none" />
                    <g fill="none">
                      <path fill="#8fbffa" d="M7 .25c-2.092 0-3.797.59-4.979 1.771S.25 4.908.25 7s.59 3.797 1.771 4.979S4.908 13.75 7 13.75s3.797-.59 4.979-1.771S13.75 9.092 13.75 7s-.59-3.797-1.771-4.979S9.092.25 7 .25" />
                      <path fill="#2859c5" fillRule="evenodd" d="M9.447 3.334a1.3 1.3 0 0 1 1.204 1.204c.11 1.502-.197 4.102-2.359 6.652c-.53.624-1.517.673-2.05-.028c-.322-.423-.682-.994-.904-1.631l2.119-2.119a.625.625 0 1 0-.884-.884L4.454 8.647c-.637-.222-1.209-.582-1.631-.904c-.7-.533-.653-1.52-.028-2.05c2.55-2.163 5.15-2.469 6.652-2.36" clipRule="evenodd" />
                    </g>
                  </svg>
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>

              </form>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className={`py-12 border-t transition-colors duration-300 ${isDark ? 'border-gray-900/60 bg-gray-950/30' : 'border-gray-200 bg-gray-55'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center border transition-colors duration-300 ${isDark ? 'border-gray-850' : 'border-gray-200'}`}>
              <img
                src="/images/logo.jpg"
                alt="US Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-650'}`}>© 2026 Uma Shankar. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-5 text-sm text-gray-500 font-mono">
            <span>B.Tech CSE Graduate 2027</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
