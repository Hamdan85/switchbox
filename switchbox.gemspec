# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'switchbox/version'

Gem::Specification.new do |spec|
  spec.name          = "switchbox"
  spec.version       = Switchbox::VERSION
  spec.authors       = ["Gabriel Hamdan"]
  spec.email         = ["ghamdan.eng@gmail.com"]
  spec.description   = "An awesome plugin that extends Rails FormBuilder making the boolean fields looks like an awesome animated switch"
  spec.summary       = "An awesome plugin that extends Rails FormBuilder making the boolean fields looks like an awesome animated switch"
  spec.homepage      = "https://github.com/Hamdan85/switchbox"
  spec.license       = "MIT"

  spec.files         = Dir["{lib,app}/**/*"] + ["LICENSE.txt", "Rakefile", "README.md"]
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.3"
  spec.add_development_dependency "rake"

  spec.add_dependency('railties')

  spec.add_dependency('jquery-rails')

end
