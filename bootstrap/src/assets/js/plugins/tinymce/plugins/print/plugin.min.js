/*!
 * TinyMCE
 *
 * Copyright (c) 2022 Ephox Corporation DBA Tiny Technologies, Inc.
 * Licensed under the Tiny commercial license. See https://www.tiny.cloud/legal/
 *
 * Version: 5.10.7
 */
!function(){"use strict";var n=tinymce.util.Tools.resolve("tinymce.PluginManager"),r=tinymce.util.Tools.resolve("tinymce.Env");n.add("print",function(n){var t,i;function e(){return i.execCommand("mcePrint")}(t=n).addCommand("mcePrint",function(){r.browser.isIE()?t.getDoc().execCommand("print",!1,null):t.getWin().print()}),(i=n).ui.registry.addButton("print",{icon:"print",tooltip:"Print",onAction:e}),i.ui.registry.addMenuItem("print",{text:"Print...",icon:"print",onAction:e}),n.addShortcut("Meta+P","","mcePrint")})}();