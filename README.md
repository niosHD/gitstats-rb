# gitstats-rb

gitstats-rb is a clone of [gitstats](http://gitstats.sourceforge.net) written in
ruby. It's written to support templates and should be easily extendable.

## Installation

    gem install gitstats-rb

## Getting started

The basic usage is quite simple. Just run `gitstats` with the git directory as
parameter. If you want to generate stats of more than one repository just list
them one after another. Note that this will generate only one statistic but
consider the commits from all repositories. Additionally, you can also specify a
name and a ref for each repository via the following format:
`<name>:<path to repository>:<ref>`.

For example:

    gitstats gitstats-rb:.:master

For more options please read sections about caching below and run `gitstats -h`.

## Caching

gitstats-rb implements two types of caches but one of them is just useful when
developing new statistic classes. The one useful for the end-user is the
stats-cache and the other one (for the devs) is the commit-cache.

### stats-cache

The stats-cache caches the statistic objects used internally. This drastically
improves the speed of incremental updates because only the new commits have to
be taken into account. To activate this cache pass the `-c` command line flag.
By default this creates the stats-cache file in the output directory. If you
want to use another file you can specify it by using `--statcache <filename>`.

Please note that this cache can only be used when working on the same
repositories as used in the previous run. Identification is done using the
repository name or, if not specified, using the given (not relative!) path.

### commit-cache

As already mentioned this cache is only useful if you want to develope new
statistic classes. It works by caching the internal commit objects to a per
repository file that can be reread when running again. This is especially useful
if you experiment with big repositories where this cache is about twice as fast
as the `git log` command used internally.

This cache can be activated with the `-C` command line flag. By default the
commit-cache is written into the output directory (`./stats` by default). If you
want to use another directory you can specify it by using
`--commitcache <directory name>`.

## Examples

* gitstats-rb: [gnuplot](http://nioshd.github.io/gitstats-rb/gitstats-rb-gnuplot/),
               [highcharts](http://nioshd.github.io/gitstats-rb/gitstats-rb-highcharts/)
* Linux: [gnuplot](http://nioshd.github.io/gitstats-rb/linux-gnuplot/),
         [highcharts](http://nioshd.github.io/gitstats-rb/linux-highcharts/)

## Dependencies

* [HAML](http://haml-lang.com)
* [SASS](http://sass-lang.com)
* [Compass](http://compass-style.org)
* [Compass-blueprint](http://compass-blueprint.org/)
* [Gnuplot (GEM)](http://rubygems.org/gems/gnuplot)
* [Gnuplot binary](http://www.gnuplot.info/)

## License

The project is licensed under GPLv3. The details can be found in the `LICENSE` file.
