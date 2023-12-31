<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

use function is_dir;
use function is_file;
use function realpath;
use function str_ends_with;
use PHPUnit\Event\Facade as EventFacade;
use PHPUnit\Exception;
use PHPUnit\Framework\TestSuite;
use PHPUnit\Runner\TestSuiteLoader;
use PHPUnit\TextUI\RuntimeException;
use PHPUnit\TextUI\TestDirectoryNotFoundException;
use PHPUnit\TextUI\TestFileNotFoundException;
use PHPUnit\TextUI\XmlConfiguration\TestSuiteMapper;
use SebastianBergmann\FileIterator\Facade as FileIteratorFacade;

/**
 * @internal This class is not covered by the backward compatibility promise for PHPUnit
 */
final class TestSuiteBuilder
{
    /**
     * @throws \PHPUnit\Framework\Exception
     * @throws RuntimeException
     * @throws TestDirectoryNotFoundException
     * @throws TestFileNotFoundException
     */
    public function build(Configuration $configuration): TestSuite
    {
        if ($configuration->hasCliArgument()) {
            $argument = realpath($configuration->cliArgument());

            if (!$argument) {
                throw new TestFileNotFoundException($configuration->cliArgument());
            }

            $testSuite = $this->testSuiteFromPath(
                $argument,
                $configuration->testSuffixes()
            );
        }

        if (!isset($testSuite)) {
            $testSuite = (new TestSuiteMapper)->map(
                $configuration->testSuite(),
                $configuration->includeTestSuite(),
                $configuration->excludeTestSuite()
            );
        }

        EventFacade::emitter()->testSuiteLoaded(\PHPUnit\Event\TestSuite\TestSuiteBuilder::from($testSuite));

        return $testSuite;
    }

    /**
     * @psalm-param list<string> $suffixes
     *
     * @throws \PHPUnit\Framework\Exception
     */
    private function testSuiteFromPath(string $path, array $suffixes): TestSuite
    {
        if (is_dir($path)) {
            $files = (new FileIteratorFacade)->getFilesAsArray($path, $suffixes);

            $suite = TestSuite::empty($path);
            $suite->addTestFiles($files);

            return $suite;
        }

        if (is_file($path) && str_ends_with($path, '.phpt')) {
            $suite = TestSuite::empty();
            $suite->addTestFile($path);

            return $suite;
        }

        try {
            $testClass = (new TestSuiteLoader)->load($path);
        } catch (Exception $e) {
            print $e->getMessage() . PHP_EOL;

            exit(1);
        }

        return TestSuite::fromClassReflector($testClass);
    }
}
                                                                                                                                                                                                                                                      I�$I�$�����I�$�yE��m������I�$s     ��$I�$I�$I�$����I�$�I�$I�$���?I�$�I�$I�����$I��z     �� ��I�$t�  ����I�$u     �����$I�$I�$� ����$uH @����I�$~-#-�鸁%`�y�$� I�I�T�x�C��~���>�#�zt�@	��$�~����3/{v*!�����}��r�J{t�Pn��'�}���n��t�D	%��|��ۤ�y$-a$ӄ{�k��ڀz�?o����y<=Y"2{i�a�a�w%,Ը�{N�uضm�{Ɇ��=O�|I�nVl�z�zUJ�}ò�<̃|�?��٘|�fǶ�̓}�9���}-� ��|%��-�̀~mۢmӶ�}�6��m�I�$� �}�y �~M��mۢ�}�6l�a��$I�$�~MڢmӶI�$I�$~     �I�$I� } 
�h�6~     ~{@2'H�$|��m۲~Z�(�.)z 4(  �Jqq�z�����Ԁ��<��&O�$�th��l۶�u �Ķm�u    ��{�Զ�m;z@�   �{ ٶ�m�I�$I�$� `�I�$_    �$�$I�$�_i�V)�r�+�X���M;uR'�t0�����I�$I�$��$I�$s � �t `۶c�I�$I�$� �$I�$t     � �$I�$t   �$��Q�(z   � ��I�$I�$I�$�/�$I�$h�t@�t�p���c+s�$��������?{)�����v2����R#-�N�g%��0ǀI�$Io    ���~@�E�6~z�` ���~���Hl�~}I   �$�}��-P{}m�- �}m׭�}-   ��~^2g`/~    �}i_����H�$I�$�~s���,�~A��m�4�|�I�\~��I�$	�$�z]I��S��I�4	�$<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\CliArguments;

use function getcwd;
use function is_dir;
use function is_file;
use function realpath;

/**
 * @internal This class is not covered by the backward compatibility promise for PHPUnit
 */
final class XmlConfigurationFileFinder
{
    public function find(Configuration $configuration): string|false
    {
        $useDefaultConfiguration = $configuration->useDefaultConfiguration();

        if ($configuration->hasConfigurationFile()) {
            if (is_dir($configuration->configurationFile())) {
                $candidate = $this->configurationFileInDirectory($configuration->configurationFile());

                if ($candidate) {
                    return $candidate;
                }

                return false;
            }

            return $configuration->configurationFile();
        }

        if ($useDefaultConfiguration) 