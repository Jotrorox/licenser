export interface License {
  id: string;
  name: string;
  spdx: string;
  category: "permissive" | "copyleft" | "weak-copyleft" | "public-domain";
  description: string;
  permissions: string[];
  conditions: string[];
  limitations: string[];
  text: string;
}

export const licenses: License[] = [
  {
    id: "mit",
    name: "MIT License",
    spdx: "MIT",
    category: "permissive",
    description:
      "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
    permissions: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Private use",
    ],
    conditions: ["License and copyright notice"],
    limitations: ["Liability", "Warranty"],
    text: `MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`,
  },
  {
    id: "apache-2.0",
    name: "Apache License 2.0",
    spdx: "Apache-2.0",
    category: "permissive",
    description:
      "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
    permissions: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Patent use",
      "Private use",
    ],
    conditions: [
      "License and copyright notice",
      "State changes",
    ],
    limitations: ["Trademark use", "Liability", "Warranty"],
    text: `Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1. Definitions.

"License" shall mean the terms and conditions for use, reproduction,
and distribution as defined by Sections 1 through 9 of this document.

"Licensor" shall mean the copyright owner or entity authorized by
the copyright owner that is granting the License.

"Legal Entity" shall mean the union of the acting entity and all
other entities that control, are controlled by, or are under common
control with that entity.

"You" (or "Your") shall mean an individual or Legal Entity
exercising permissions granted by this License.

"Source" form shall mean the preferred form for making modifications,
including but not limited to software source code, documentation
source, and configuration files.

"Object" form shall mean any form resulting from mechanical
transformation or translation of a Source form, including but not
limited to compiled object code, generated documentation, and
conversions to other media types.

"Work" shall mean the work of authorship, whether in Source or
Object form, made available under the License.

"Derivative Works" shall mean any work, whether in Source or Object
form, that is based on (or derived from) the Work.

"Contribution" shall mean any work of authorship submitted to the
Licensor for inclusion in the Work.

"Contributor" shall mean Licensor and any Legal Entity on behalf of
whom a Contribution has been received by the Licensor.

2. Grant of Copyright License.

3. Grant of Patent License.

4. Redistribution.

5. Submission of Contributions.

6. Trademarks.

7. Disclaimer of Warranty.

8. Limitation of Liability.

9. Accepting Warranty or Additional Liability.

Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`,
  },
  {
    id: "gpl-3.0",
    name: "GNU General Public License v3.0",
    spdx: "GPL-3.0",
    category: "copyleft",
    description:
      "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.",
    permissions: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Patent use",
      "Private use",
    ],
    conditions: [
      "License and copyright notice",
      "State changes",
      "Disclose source",
      "Same license",
    ],
    limitations: ["Liability", "Warranty"],
    text: `GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

Copyright (C) 2007 Free Software Foundation, Inc.
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.

Preamble

The GNU General Public License is a free, copyleft license for
software and other kinds of works.

The licenses for most software and other practical works are designed
to take away your freedom to share and change the works. By contrast,
the GNU General Public License is intended to guarantee your freedom to
share and change all versions of a program--to make sure it remains free
software for all its users.

[Full text available at https://www.gnu.org/licenses/gpl-3.0.txt]`,
  },
  {
    id: "gpl-2.0",
    name: "GNU General Public License v2.0",
    spdx: "GPL-2.0",
    category: "copyleft",
    description:
      "The GNU GPL is the most widely used free software license and has a strong copyleft requirement. When distributing derived works, the source code of the work must be made available under the same license. There are multiple variants of the GNU GPL, each with different requirements.",
    permissions: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Private use",
    ],
    conditions: [
      "License and copyright notice",
      "State changes",
      "Disclose source",
      "Same license",
    ],
    limitations: ["Liability", "Warranty"],
    text: `GNU GENERAL PUBLIC LICENSE
Version 2, June 1991

Copyright (C) 1989, 1991 Free Software Foundation, Inc.
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA

Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.

Preamble

The licenses for most software are designed to take away your
freedom to share and change it. By contrast, the GNU General Public
License is intended to guarantee your freedom to share and change free
software--to make sure the software is free for all its users.

[Full text available at https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt]`,
  },
  {
    id: "lgpl-3.0",
    name: "GNU Lesser General Public License v3.0",
    spdx: "LGPL-3.0",
    category: "weak-copyleft",
    description:
      "Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.",
    permissions: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Patent use",
      "Private use",
    ],
    conditions: [
      "License and copyright notice",
      "Disclose source",
      "Same license (library)",
    ],
    limitations: ["Liability", "Warranty"],
    text: `GNU LESSER GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

Copyright (C) 2007 Free Software Foundation, Inc.

Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.

This version of the GNU Lesser General Public License incorporates
the terms and conditions of version 3 of the GNU General Public
License, supplemented by the additional permissions listed below.

[Full text available at https://www.gnu.org/licenses/lgpl-3.0.txt]`,
  },
  {
    id: "lgpl-2.1",
    name: "GNU Lesser General Public License v2.1",
    spdx: "LGPL-2.1",
    category: "weak-copyleft",
    description:
      "Primarily used for software libraries, the GNU LGPL requires that derived works be licensed under the same license, but works that only link to it do not fall under this restriction. There are two commonly used versions of the GNU LGPL.",
    permissions: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Private use",
    ],
    conditions: [
      "License and copyright notice",
      "Disclose source",
      "Same license (library)",
    ],
    limitations: ["Liability", "Warranty"],
    text: `GNU LESSER GENERAL PUBLIC LICENSE
Version 2.1, February 1999

Copyright (C) 1991, 1999 Free Software Foundation, Inc.
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA

Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.

[Full text available at https://www.gnu.org/licenses/old-licenses/lgpl-2.1.txt]`,
  },
  {
    id: "bsd-2-clause",
    name: 'BSD 2-Clause "Simplified" License',
    spdx: "BSD-2-Clause",
    category: "permissive",
    description:
      'A permissive license that comes in two variants, the BSD 2-Clause and BSD 3-Clause. Both have very minimal requirements about how the software can be redistributed. The 2-Clause variant is sometimes referred to as the "Simplified BSD License".',
    permissions: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Private use",
    ],
    conditions: ["License and copyright notice"],
    limitations: ["Liability", "Warranty"],
    text: `BSD 2-Clause License

Copyright (c) [year], [fullname]

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`,
  },
  {
    id: "bsd-3-clause",
    name: 'BSD 3-Clause "New" or "Revised" License',
    spdx: "BSD-3-Clause",
    category: "permissive",
    description:
      "A permissive license similar to the BSD 2-Clause License, but with a 3rd clause that prohibits others from using the name of the copyright holder or its contributors to promote derived products without written consent.",
    permissions: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Private use",
    ],
    conditions: ["License and copyright notice"],
    limitations: ["Liability", "Warranty"],
    text: `BSD 3-Clause License

Copyright (c) [year], [fullname]

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`,
  },
  {
    id: "isc",
    name: "ISC License",
    spdx: "ISC",
    category: "permissive",
    description:
      "A permissive license functionally equivalent to the BSD 2-Clause license, but with simplified language. The ISC license is the default license used by npm and was formerly used by OpenBSD.",
    permissions: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Private use",
    ],
    conditions: ["License and copyright notice"],
    limitations: ["Liability", "Warranty"],
    text: `ISC License

Copyright (c) [year] [fullname]

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.`,
  },
  {
    id: "mpl-2.0",
    name: "Mozilla Public License 2.0",
    spdx: "MPL-2.0",
    category: "weak-copyleft",
    description:
      "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.",
    permissions: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Patent use",
      "Private use",
    ],
    conditions: [
      "Disclose source",
      "License and copyright notice",
      "Same license (file)",
    ],
    limitations: ["Liability", "Trademark use", "Warranty"],
    text: `Mozilla Public License Version 2.0

1. Definitions

1.1. "Contributor" means each individual or legal entity that creates,
contributes to the creation of, or owns Covered Software.

1.2. "Contributor Version" means the combination of the Contributions of
others (if any) used by a Contributor and that particular Contributor's
Contribution.

[Full text available at https://www.mozilla.org/en-US/MPL/2.0/]`,
  },
  {
    id: "agpl-3.0",
    name: "GNU Affero General Public License v3.0",
    spdx: "AGPL-3.0",
    category: "copyleft",
    description:
      "Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.",
    permissions: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Patent use",
      "Private use",
    ],
    conditions: [
      "License and copyright notice",
      "State changes",
      "Disclose source",
      "Same license",
      "Network use is distribution",
    ],
    limitations: ["Liability", "Warranty"],
    text: `GNU AFFERO GENERAL PUBLIC LICENSE
Version 3, 19 November 2007

Copyright (C) 2007 Free Software Foundation, Inc.

Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.

Preamble

The GNU Affero General Public License is a free, copyleft license
for software and other kinds of works, specifically designed to ensure
cooperation with the community in the case of network server software.

[Full text available at https://www.gnu.org/licenses/agpl-3.0.txt]`,
  },
  {
    id: "unlicense",
    name: "The Unlicense",
    spdx: "Unlicense",
    category: "public-domain",
    description:
      "A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.",
    permissions: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Private use",
    ],
    conditions: [],
    limitations: ["Liability", "Warranty"],
    text: `This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>`,
  },
  {
    id: "cc0-1.0",
    name: "Creative Commons Zero v1.0 Universal",
    spdx: "CC0-1.0",
    category: "public-domain",
    description:
      "The Creative Commons CC0 Public Domain Dedication waives copyright interest in a work you've created and dedicates it to the world-wide public domain. Use CC0 to opt out of copyright entirely and ensure your work has the widest reach.",
    permissions: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Private use",
    ],
    conditions: [],
    limitations: ["Liability", "Trademark use", "Patent use", "Warranty"],
    text: `Creative Commons Legal Code

CC0 1.0 Universal

CREATIVE COMMONS CORPORATION IS NOT A LAW FIRM AND DOES NOT PROVIDE
LEGAL SERVICES. DISTRIBUTION OF THIS DOCUMENT DOES NOT CREATE AN
ATTORNEY-CLIENT RELATIONSHIP. CREATIVE COMMONS PROVIDES THIS
INFORMATION ON AN "AS-IS" BASIS.

Statement of Purpose

The laws of most jurisdictions throughout the world automatically confer
exclusive Copyright and Related Rights upon the creator and subsequent
owner(s) of an original work of authorship and/or a database.

[Full text available at https://creativecommons.org/publicdomain/zero/1.0/legalcode]`,
  },
  {
    id: "artistic-2.0",
    name: "Artistic License 2.0",
    spdx: "Artistic-2.0",
    category: "permissive",
    description:
      "Heavily favored by the Perl community, the Artistic license requires that modified versions of the software do not prevent users from running the standard version. It also allows the original author to aggregate and make money from your modifications.",
    permissions: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Patent use",
      "Private use",
    ],
    conditions: [
      "License and copyright notice",
      "State changes",
    ],
    limitations: ["Liability", "Trademark use", "Warranty"],
    text: `The Artistic License 2.0

Copyright (c) 2000-2006, The Perl Foundation.

Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.

Preamble

This license establishes the terms under which a given free software
Package may be copied, modified, distributed, and/or redistributed.

[Full text available at https://opensource.org/licenses/Artistic-2.0]`,
  },
  {
    id: "zlib",
    name: "zlib License",
    spdx: "Zlib",
    category: "permissive",
    description:
      "A short permissive license, compatible with GPL. Requires altered source versions to be plainly marked as such and not misrepresented as being the original software.",
    permissions: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Private use",
    ],
    conditions: [
      "License and copyright notice for source",
      "State changes",
    ],
    limitations: ["Liability", "Warranty"],
    text: `zlib License

Copyright (c) [year] [fullname]

This software is provided 'as-is', without any express or implied
warranty. In no event will the authors be held liable for any damages
arising from the use of this software.

Permission is granted to anyone to use this software for any purpose,
including commercial applications, and to alter it and redistribute it
freely, subject to the following restrictions:

1. The origin of this software must not be misrepresented; you must not
   claim that you wrote the original software. If you use this software
   in a product, an acknowledgment in the product documentation would be
   appreciated but is not required.

2. Altered source versions must be plainly marked as such, and must not be
   misrepresented as being the original software.

3. This notice may not be removed or altered from any source distribution.`,
  },
  {
    id: "bsl-1.0",
    name: "Boost Software License 1.0",
    spdx: "BSL-1.0",
    category: "permissive",
    description:
      "A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
    permissions: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Private use",
    ],
    conditions: ["License and copyright notice for source"],
    limitations: ["Liability", "Warranty"],
    text: `Boost Software License - Version 1.0 - August 17th, 2003

Permission is hereby granted, free of charge, to any person or organization
obtaining a copy of the software and accompanying documentation covered by
this license (the "Software") to use, reproduce, display, distribute,
execute, and transmit the Software, and to prepare derivative works of the
Software, and to permit third-parties to whom the Software is furnished to
do so, all subject to the following:

The copyright notices in the Software and this entire statement, including
the above license grant, this restriction and the following disclaimer,
must be included in all copies of the Software, in whole or in part, and
all derivative works of the Software, unless such copies or derivative
works are solely in the form of machine-executable object code generated by
a source language processor.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT
SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE
FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.`,
  },
  {
    id: "epl-2.0",
    name: "Eclipse Public License 2.0",
    spdx: "EPL-2.0",
    category: "weak-copyleft",
    description:
      "This commercially-friendly copyleft license provides the ability to commercially license binaries; a modern royalty-free patent license grant; and the ability for linked works to use other licenses, including commercial ones.",
    permissions: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Patent use",
      "Private use",
    ],
    conditions: [
      "Disclose source",
      "License and copyright notice",
      "Same license",
    ],
    limitations: ["Liability", "Warranty"],
    text: `Eclipse Public License - v 2.0

THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE
PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION
OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.

1. DEFINITIONS

"Contribution" means:
  a) in the case of the initial Contributor, the initial content
     Distributed under this Agreement, and
  b) in the case of each subsequent Contributor, the changes to the Program.

[Full text available at https://www.eclipse.org/legal/epl-2.0/]`,
  },
  {
    id: "eupl-1.2",
    name: "European Union Public License 1.2",
    spdx: "EUPL-1.2",
    category: "weak-copyleft",
    description:
      "The European Union Public License (EUPL) is a copyleft free/open source software license created on the initiative of and approved by the European Commission. It is available in 23 official languages of the European Union.",
    permissions: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Patent use",
      "Private use",
    ],
    conditions: [
      "License and copyright notice",
      "Disclose source",
      "Same license",
      "State changes",
      "Network use is distribution",
    ],
    limitations: ["Liability", "Trademark use", "Warranty"],
    text: `European Union Public Licence V. 1.2

EUPL © the European Union 2007, 2016

This European Union Public Licence (the 'EUPL') applies to the Work
(as defined below) which is provided under the terms of this Licence.

[Full text available at https://eupl.eu/1.2/en/]`,
  },
  {
    id: "cc-by-4.0",
    name: "Creative Commons Attribution 4.0",
    spdx: "CC-BY-4.0",
    category: "permissive",
    description:
      "Permits almost any use subject to providing credit and license notice. Frequently used for media assets and educational materials. The most common Creative Commons license for open content.",
    permissions: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Private use",
    ],
    conditions: [
      "License and copyright notice",
      "State changes",
    ],
    limitations: ["Liability", "Trademark use", "Patent use", "Warranty"],
    text: `Creative Commons Attribution 4.0 International

Creative Commons Corporation is not a law firm and does not provide
legal services or legal advice.

By exercising the Licensed Rights, You accept and agree to be bound by
the terms and conditions of this Creative Commons Attribution 4.0
International Public License ("Public License").

[Full text available at https://creativecommons.org/licenses/by/4.0/legalcode]`,
  },
  {
    id: "cc-by-sa-4.0",
    name: "Creative Commons Attribution Share Alike 4.0",
    spdx: "CC-BY-SA-4.0",
    category: "copyleft",
    description:
      "Similar to CC-BY-4.0 but requires derivatives be distributed under the same or a compatible license. Commonly used for media assets, educational materials, and is the license used by Wikipedia.",
    permissions: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Private use",
    ],
    conditions: [
      "License and copyright notice",
      "State changes",
      "Same license",
    ],
    limitations: ["Liability", "Trademark use", "Patent use", "Warranty"],
    text: `Creative Commons Attribution-ShareAlike 4.0 International

By exercising the Licensed Rights, You accept and agree to be bound by
the terms and conditions of this Creative Commons Attribution-ShareAlike
4.0 International Public License ("Public License").

[Full text available at https://creativecommons.org/licenses/by-sa/4.0/legalcode]`,
  },
  {
    id: "wtfpl",
    name: "Do What The F*ck You Want To Public License",
    spdx: "WTFPL",
    category: "public-domain",
    description:
      "The easiest license out there. It gives the user permissions to do whatever they want with the code. This license is GPL-compatible and approved by the Free Software Foundation.",
    permissions: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Private use",
    ],
    conditions: [],
    limitations: [],
    text: `DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
Version 2, December 2004

Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

0. You just DO WHAT THE FUCK YOU WANT TO.`,
  },
  {
    id: "0bsd",
    name: "BSD Zero Clause License",
    spdx: "0BSD",
    category: "public-domain",
    description:
      "The BSD Zero Clause License goes further than the BSD 2-Clause license to allow you unlimited freedom with the software without requirements to include the copyright notice, license text, or disclaimer in either source or binary forms.",
    permissions: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Private use",
    ],
    conditions: [],
    limitations: ["Liability", "Warranty"],
    text: `BSD Zero Clause License

Copyright (c) [year] [fullname]

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.`,
  },
  {
    id: "postgresql",
    name: "PostgreSQL License",
    spdx: "PostgreSQL",
    category: "permissive",
    description:
      "A very short, BSD-like license, used specifically for PostgreSQL. This is a permissive free software license with minimal restrictions on how the software can be used, modified, and redistributed.",
    permissions: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Private use",
    ],
    conditions: ["License and copyright notice"],
    limitations: ["Liability", "Warranty"],
    text: `PostgreSQL License

Copyright (c) [year], [fullname]

Permission to use, copy, modify, and distribute this software and its
documentation for any purpose, without fee, and without a written agreement
is hereby granted, provided that the above copyright notice and this
paragraph and the following two paragraphs appear in all copies.

IN NO EVENT SHALL [fullname] BE LIABLE TO ANY PARTY FOR DIRECT, INDIRECT,
SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS,
ARISING OUT OF THE USE OF THIS SOFTWARE AND ITS DOCUMENTATION, EVEN IF
[fullname] HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

[fullname] SPECIFICALLY DISCLAIMS ANY WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
PARTICULAR PURPOSE. THE SOFTWARE PROVIDED HEREUNDER IS ON AN "AS IS" BASIS,
AND [fullname] HAS NO OBLIGATIONS TO PROVIDE MAINTENANCE, SUPPORT, UPDATES,
ENHANCEMENTS, OR MODIFICATIONS.`,
  },
];

export const categories = {
  permissive: {
    label: "Permissive",
    color: "#10b981",
    description: "Minimal restrictions on how software can be used, modified, and redistributed.",
  },
  copyleft: {
    label: "Copyleft",
    color: "#f59e0b",
    description: "Derivative works must be distributed under the same or compatible license.",
  },
  "weak-copyleft": {
    label: "Weak Copyleft",
    color: "#6366f1",
    description: "Copyleft applies to the licensed component but not to larger works.",
  },
  "public-domain": {
    label: "Public Domain",
    color: "#06b6d4",
    description: "No restrictions whatsoever. Work is dedicated to the public domain.",
  },
} as const;

export function getLicenseById(id: string): License | undefined {
  return licenses.find((l) => l.id === id);
}
