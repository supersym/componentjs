/*
**  ComponentJS -- Component System for JavaScript <http://componentjs.com>
**  Copyright (c) 2009-2013 Ralf S. Engelschall <http://engelschall.com>
**
**  This Source Code Form is subject to the terms of the Mozilla Public
**  License, v. 2.0. If a copy of the MPL was not distributed with this
**  file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

interface ComponentJS_event {
    target     (val?: any   ): any;
    propagation(val?: bool  ): bool;
    processing (val?: bool  ): bool;
    dispatched (val?: bool  ): bool;
    decline    (val?: bool  ): bool;
    state      (val?: string): string;
    result     (val?: any   ): any;
    async      (val?: bool  ): bool;
}

interface ComponentJS_event_cb {
    (ev: ComponentJS_event, ...rest: any[]): void;
}

interface ComponentJS_event_cb_directresult {
    (...rest: any[]): any;
}

interface ComponentJS_comp {
    /*
    create(name1: string, clazz1: any);
    create(name1: string, clazz1: any,
           name2: string, clazz2: any);
    create(name1: string, clazz1: any,
           name2: string, clazz2: any,
           name3: string, clazz3: any);
    create(name1: string, clazz1: any,
           name2: string, clazz2: any,
           name3: string, clazz3: any,
           name4: string, clazz4: any);
    create(name1: string, clazz1: any,
           name2: string, clazz2: any,
           name3: string, clazz3: any,
           name4: string, clazz4: any,
           ...rest: any[]);
           */
    create(spec: string, ...rest: any[]);

    model(params: Object): Object;

    value(name: string): any;
    value(name: string, value: any): any;
    value(params: {
        name: string;
        value: any;
        force: bool;
    }): any;

    register(params: {
        name: string;
        func: ComponentJS_event_cb;
        spool?: string;
    }): number;
    register(
        name: string,
        func: ComponentJS_event_cb
    ): number;

    observe(params: {
        name: string;
        func: ComponentJS_event_cb;
        spool?: string;
        touch?: bool;
    }): number;
    observe(
        name: string,
        func: ComponentJS_event_cb
    ): number;

    call(params: {
        name: string;
        args: any[];
    }): any;
    call(
        name: string,
        ...args: any[]
    ): any;

    publish(params: {
        name: string;
        spec?: {};
        async?: bool;
        capturing?: bool;
        bubbling?: bool;
        completed?: () => void;
        resultinit?: any;
        resultstep?: (a: any, b: any) => any;
        directresult?: bool;
        firstonly?: bool;
        silent?: bool;
        args?: any[];
    }): any;
    publish(
        name: string,
        ...args: any[]
    ): any;

    unspool(name: string): void;

    guard(name: string, level: number): void;

    plug(params: {
        name?: string;
        object: any;
        spool?: string;
    }): void;
    plug(
        object: any
    ): void;

    unplug(params: {
        name?: string;
        object: any;
    }): void;
    unplug(
        object: any
    ): void;

    property(name: string): any;
    property(name: string, value: any): any;

    state_auto_increase(enable: bool): void;
    socket(params: {
        name?: string;
        scope?: any;
        ctx: any;
        plug?: any;
        unplug?: any;
    }): void;
    socket(
        ctx: any,
        plug?: any,
        unplug?: any
    ): void;

    subscribe(params: {
        name: string;
        spec?: {};
        ctx?: any;
        func: ComponentJS_event_cb_directresult;
        args?: any[];
        capture?: bool;
        noevent?: bool;
        exclusive?: bool;
        spool?: string;
    }): number;
    subscribe(
        name: string,
        func: ComponentJS_event_cb_directresult
    ): number;

    state(): string;
    state(state: string): void;
    state(params: {
        state: string;
        sync?: bool;
        callback?: () => any;
    }): void;

    touch(name: string): void;

    link(params: {
        name?: string;
        scope?: string;
        ctx: any;
        target: string;
    }): void;
    link(
        ctx: any,
        target: string
    ): void;

    store(): string[];
    store(key: string): any;
    store(key: string, val: any): any;
}

interface ComponentJS_api {
    (object: any):                   ComponentJS_comp;
    (selector: string):              ComponentJS_comp;
    (object: any, selector: string): ComponentJS_comp;

    plugin(): string[];
    plugin(name: string): bool;
    plugin(name: string, callback: (_cs: any, $cs: any, GLOBAL: any) => void): void;

    bootstrap(): void;
    shutdown(): void;

    create(spec: string, ...rest: any[]);
    create(base: any, spec: string, ...rest: any[]);

    mark(obj: any, name: string): void;
    marked(obj: any, name: string): bool;

    debug(level: number): void;
    debug_instrumented(): bool;
    debug_window(): bool;
    debug_window(enable: bool, name: string): void;
    debug_window(params: {
        enable: bool;
        autoclose: bool;
        name: string;
        natural?: bool;
        width?: number;
        height?: number;
    }): void;

    symbol(name: string): void;
    symbol(): string;

    ns(name: string, value?: any): any;

    version: { major: number; minor: number; micro: number; date: number; };

    pattern: any;
}

declare var ComponentJS_export: String
declare var ComponentJS:        ComponentJS_api
declare var cs:                 ComponentJS_api

